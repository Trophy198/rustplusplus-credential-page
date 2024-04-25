interface Credentials {
  fcm_credentials: {
    fcm: {
      token: string;
      pushSet: string;
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
}

export function formatCredentialsData(credentials: Credentials): string {
  const { fcm_credentials, steamId } = credentials;
  const { fcm, gcm, keys } = fcm_credentials;
  return (
    `/credentials add ` +
    `keys_private_key:${keys.privateKey} ` +
    `keys_public_key:${keys.publicKey} ` +
    `keys_auth_secret:${keys.authSecret} ` +
    `fcm_token:${fcm.token} ` +
    `fcm_push_set:${fcm.pushSet} ` +
    `gcm_token:${gcm.token} ` +
    `gcm_android_id:${gcm.androidId} ` +
    `gcm_security_token:${gcm.securityToken} ` +
    `gcm_app_id:${gcm.appId} ` +
    `steam_id:${steamId}`
  );
}
