/* An array of routes that are accessible to the public, NOT required authentication */
export const publicRoutes = ["/"];

/* An array of routes that are used for authentication */
export const authRoutes = ["/auth/login", "/auth/register", "auth/error"];

/* The prefix for API authentication routes */
export const apiAuthPrefix = "/api/auth";

/* The default redirect path after logging in */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
