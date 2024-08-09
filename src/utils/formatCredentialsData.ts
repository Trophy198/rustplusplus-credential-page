interface Credentials {
  fcm_credentials: {
    fcm: {
      name: string;
      token: string;
      web: {
        endpoint: string;
        p256dh: string;
        auth: string;
      };
    };
    gcm: {
      token: string;
      androidId: string;
      securityToken: string;
      appId: string;
    };
    keys: {
      privateKey: string;
      publicKey: string;
      authSecret: string;
    };
  };
  steamId: string;
  expire_date: number;
  issued_date: number;
}

interface FormattedCredentialsData {
  formattedData: string;
  expire_date: number;
}

export function formatCredentialsData(credentials: Credentials): FormattedCredentialsData {
  const { fcm_credentials, steamId, expire_date, issued_date } = credentials;
  const { fcm, gcm, keys } = fcm_credentials;
  const formattedData =
    `/credentials add ` +
    `keys_private_key:${keys.privateKey} ` +
    `keys_public_key:${keys.publicKey} ` +
    `keys_auth_secret:${keys.authSecret} ` +
    `fcm_name:${fcm.name} ` +
    `fcm_token:${fcm.token} ` +
    `fcm_web_endpoint:${fcm.web.endpoint} ` +
    `fcm_web_p256dh:${fcm.web.p256dh} ` +
    `fcm_web_auth:${fcm.web.auth} ` +
    `gcm_token:${gcm.token} ` +
    `gcm_android_id:${gcm.androidId} ` +
    `gcm_security_token:${gcm.securityToken} ` +
    `gcm_app_id:${gcm.appId} ` +
    `steam_id:${steamId} ` +
    `issued_date:${issued_date} ` +
    `expire_date:${expire_date} `;

  return { formattedData, expire_date };
}
