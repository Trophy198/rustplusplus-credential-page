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
  /** Steam-login Rust+ token; bots updated for the Nov 2026 Rust+ relay need it to connect. */
  rustplus_auth_token?: string;
}

interface FormattedCredentialsData {
  formattedData: string;
  expire_date: number;
  hasAuthToken: boolean;
}

export function formatCredentialsData(credentials: Credentials): FormattedCredentialsData {
  const { fcm_credentials, steamId, expire_date, issued_date, rustplus_auth_token } = credentials;
  const { gcm, fcm } = fcm_credentials;
  const formattedData =
    `/credentials add ` +
    `gcm_android_id:${gcm.androidId} ` +
    `gcm_security_token:${gcm.securityToken} ` +
    `steam_id:${steamId} ` +
    `issued_date:${issued_date} ` +
    `expire_date:${expire_date} ` +
    (rustplus_auth_token ? `rustplus_auth_token:${rustplus_auth_token} ` : '');

  return { formattedData, expire_date, hasAuthToken: !!rustplus_auth_token };
}
