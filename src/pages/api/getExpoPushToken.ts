import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { destroyCookie } from 'nookies';

async function getExpoPushToken(
  deviceId: string,
  fcmToken: string,
): Promise<void> {
  const response = await axios.post(
    'https://exp.host/--/api/v2/push/getExpoPushToken',
    {
      deviceId,
      experienceId: '@facepunch/RustCompanion',
      appId: 'com.facepunch.rust.companion',
      deviceToken: fcmToken,
      type: 'fcm',
      development: false,
    },
  );

  if (response.data.data.expoPushToken) {
    return;
  }

  throw new Error('No Expo Push Token returned');
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const deviceId = req.cookies.deviceId;
  const fcmToken = req.cookies.fcmToken;

  if (!deviceId || !fcmToken) {
    res.status(400).json({ error: 'Required cookies are missing' });
    return;
  }

  try {
    await getExpoPushToken(deviceId, fcmToken);
    res.status(200).end();
  } catch (error) {
    destroyCookie({ res }, 'deviceId');
    destroyCookie({ res }, 'fcmToken');
    destroyCookie({ res }, 'config');
    if (
      axios.isAxiosError(error) &&
      error.response &&
      error.response.status === 403
    ) {
      res.redirect(307, '/');
    } else {
      res.status(500).json({ error: 'Failed to retrieve Expo Push Token' });
    }
  }
}
