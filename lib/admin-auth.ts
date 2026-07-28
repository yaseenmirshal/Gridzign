export const ADMIN_EMAIL = "admin@gridzign.com";
export const ADMIN_PASSWORD_HASH = "6f2cb9dd8f4b65e24e1c3f3fa5bc57982349237f11abceacd45bbcb74d621c25";
export const AUTH_COOKIE_NAME = "gridzign-admin-auth";

export async function hashPassword(value: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(value);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export function setAuthCookie() {
  if (typeof document === "undefined") return;
  document.cookie = `${AUTH_COOKIE_NAME}=true; path=/; max-age=60*60*24*7; SameSite=Lax`;
}

export function clearAuthCookie() {
  if (typeof document === "undefined") return;
  document.cookie = `${AUTH_COOKIE_NAME}=; path=/; max-age=0; SameSite=Lax`;
}

export function isAuthenticatedFromCookie() {
  if (typeof document === "undefined") return false;
  return document.cookie
    .split(";")
    .map((item) => item.trim())
    .some((item) => item.startsWith(`${AUTH_COOKIE_NAME}=`));
}
