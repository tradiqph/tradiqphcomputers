export const ADMIN_USERNAME = "admin";
export const ADMIN_PASSWORD = "TradIQPH";
export const SESSION_COOKIE = "admin_session";
export const SESSION_VALUE = "authenticated";
export const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export function validateCredentials(
  username: string,
  password: string
): boolean {
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
}

export function isAuthenticated(sessionValue?: string): boolean {
  return sessionValue === SESSION_VALUE;
}
