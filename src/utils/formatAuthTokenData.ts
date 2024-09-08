interface AuthData {
  authToken: string;
  steamId: string;
  issued_date: string;
  expire_date: string;
}

export function formatAuthTokenData(AuthData: AuthData) {
  const { authToken, steamId, expire_date, issued_date } = AuthData;

  const formattedData =
    `/authtoken add ` +
    `token:${authToken} ` +
    `steam_id:${steamId} ` +
    `issued_date:${issued_date} ` +
    `expire_date:${expire_date} `;

  return { formattedData, expire_date };
}
