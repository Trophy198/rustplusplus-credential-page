import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const { register }: { register: any } = require('push-receiver');

interface FCMCredentials {
  fcm: {
    token: string;
  };
}

interface RegistrationData {
  success: boolean;
  message: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // FCM 토큰 등록
    const fcmCredentials: FCMCredentials = await register('976529667804');
    const fcmToken = fcmCredentials.fcm.token;
    console.log('FCM Token obtained:', fcmToken);
    console.log(fcmCredentials)

    // Expo 푸시 토큰 요청
    const expoPushToken = await getExpoPushToken(fcmToken);
    console.log('Expo Push Token obtained:', expoPushToken);

    const { token, steamId } = req.query;

    // 필수 토큰 검증
    if (!token || typeof token !== 'string') {
      console.log('Token missing from request!');
      res.status(400).send('Token missing from request!');
      return;
    }

    console.log('Auth Token received:', token)

    // Rust+ 등록 프로세스 시작
    const registrationData: RegistrationData = await registerWithRustPlus(token, expoPushToken);
    console.log('Registration with Rust+ successful:', registrationData);

    // 성공적으로 모든 정보를 받았다면, 최종 데이터를 사용자에게 보내기
    const config = {
      fcm_credentials: fcmCredentials,
      expo_push_token: expoPushToken,
      rustplus_auth_token: token,
      steamId: steamId,
    };

    console.log('Configuration ready to display.');
    res.redirect(`/display?data=${encodeURIComponent(JSON.stringify(config))}`);
  } catch (error) {
    console.error('Error in processing request:', error);
    res.status(500).send('An error occurred while processing your request');
  }
}

// Expo 푸시 토큰 가져오기
async function getExpoPushToken(fcmToken: string): Promise<string> {
  const response = await axios.post('https://exp.host/--/api/v2/push/getExpoPushToken', {
    deviceId: uuidv4(),
    experienceId: '@facepunch/RustCompanion',
    appId: 'com.facepunch.rust.companion',
    deviceToken: fcmToken,
    type: 'fcm',
    development: false,
  });
  return response.data.data.expoPushToken;
}

// Rust+ 등록 함수
async function registerWithRustPlus(authToken: any, expoPushToken: any) {
  const response = await axios.post(
    'https://companion-rust.facepunch.com/api/push/register',
    {
      AuthToken: authToken,
      DeviceId: 'rustplus.js',
      PushKind: 0,
      PushToken: expoPushToken,
    },
  )
  return response.data
}
