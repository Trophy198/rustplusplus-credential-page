interface Credentials {
  fcm_credentials: {
    gcm: {
      androidId: string;
      securityToken: string;
    };
    fcm: {
      token: string;
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
  const { gcm, fcm } = fcm_credentials;
  const formattedData =
    `/credentials add ` +
    `gcm_android_id:${gcm.androidId} ` +
    `gcm_security_token:${gcm.securityToken} ` +
    `steam_id:${steamId} ` +
    `issued_date:${issued_date} ` +
    `expire_date:${expire_date} `;

  return { formattedData, expire_date };
}
