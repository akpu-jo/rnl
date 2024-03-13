/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
 
export const publicRoutes = [
    '/welcome'
]

/**
 * An array of routes that are used for authentication 
 * These routes do not require authentication
 * @type {string[]}
 */
 
export const authRoutes = [
    '/sign-in',
    '/sign-up'
]
/**
 * An array of routes that are used for authentication 
 * These routes do not require authentication
 * @type {string[]}
 */
 
export const emailVerificationRoutes = [
    '/verification/email',
    '/verification/email/new'
]


/**
 * The prefix used for authentication routes
 * Routes that start with these prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth'


/**
 * The default redirect url after login in
 * @type {string}
 */
export const defaultForwardUrl = '/'