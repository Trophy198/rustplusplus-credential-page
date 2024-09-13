import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const { AndroidFCM } = require('@liamcottle/push-receiver');

const apiKey = process.env.API_KEY;
const projectId = process.env.PROJECT_ID;
const gcmSenderId = process.env.GCM_SENDER_ID;
const gmsAppId = process.env.GMS_APP_ID;
const androidPackageName = process.env.ANDROID_PACKAGE_NAME;
const androidPackageCert = process.env.ANDROID_PACKAGE_CERT;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const deviceId = uuidv4();
    const fcmCredentials = await AndroidFCM.register(
      apiKey,
      projectId,
      gcmSenderId,
      gmsAppId,
      androidPackageName,
      androidPackageCert,
    );
    const fcmToken = fcmCredentials.fcm.token;
    const expoPushToken = await getExpoPushToken(deviceId, fcmToken);
    const { token, steamId } = req.query;
    console.log(fcmCredentials);
    if (!token || typeof token !== 'string') {
      console.log('Token missing from request!');
      res.status(400).send('Token missing from request!');
      return;
    }

    const registrationData = await registerWithRustPlus(token, deviceId, expoPushToken);
    const rustplusToken = registrationData.token;
    const header = decodeJWTHeader(rustplusToken);
    const expiryDate = new Date(header.exp * 1000);

    const config = {
      fcm_credentials: fcmCredentials,
      steamId: steamId,
      expire_date: header.exp,
      issued_date: header.iss,
    };

    res.setHeader('Set-Cookie', [
      `config=${encodeURIComponent(JSON.stringify(config))}; Path=/; HttpOnly; Expires=${expiryDate.toUTCString()}`,
    ]);
    res.status(200).json({ success: true, message: 'Registration successsful' });
  } catch (error) {
    console.error('Error in processing request:', error);
    res.status(500).send('An error occurred while processing your request');
  }
}

async function getExpoPushToken(deviceId: string, fcmToken: string): Promise<string> {
  const response = await axios.post('https://exp.host/--/api/v2/push/getExpoPushToken', {
    type: 'fcm',
    deviceId,
    development: false,
    appId: 'com.facepunch.rust.companion',
    deviceToken: fcmToken,
    projectId: '49451aca-a822-41e6-ad59-955718d0ff9c',
  });
  return response.data.data.expoPushToken;
}

async function registerWithRustPlus(authToken: string, deviceId: string, expoPushToken: string) {
  const response = await axios.post('https://companion-rust.facepunch.com:443/api/push/register', {
    AuthToken: authToken,
    DeviceId: deviceId,
    PushKind: 3,
    PushToken: expoPushToken,
  });
  return response.data;
}

function decodeJWTHeader(token: string) {
  const base64Url = token.split('.')[0];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonHeader = decodeURIComponent(
    atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join(''),
  );

  return JSON.parse(jsonHeader);
}
