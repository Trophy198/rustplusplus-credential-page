/**
 * Cookie names shared by the credential flow.
 *
 * - CONFIG_COOKIE holds the FCM credentials (HttpOnly, server-only).
 * - LOGIN_FLAG_COOKIE is a non-HttpOnly marker with the same lifetime so the
 *   client can render the header login state without calling an API route.
 */
export const CONFIG_COOKIE = 'config';
export const LOGIN_FLAG_COOKIE = 'rpp_logged_in';

export const buildLoginFlagCookie = (expires: Date): string =>
  `${LOGIN_FLAG_COOKIE}=1; Path=/; SameSite=Lax; Secure; Expires=${expires.toUTCString()}`;

export const hasLoginFlagCookie = (): boolean => {
  if (typeof document === 'undefined') return false;
  return document.cookie.split(';').some((part) => part.trim().startsWith(`${LOGIN_FLAG_COOKIE}=`));
};
