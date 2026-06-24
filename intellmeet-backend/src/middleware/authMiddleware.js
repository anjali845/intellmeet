// src/middleware/authMiddleware.js
// Placeholder authentication middleware.
//
// Currently a pass-through (calls next() immediately) so the rest of the
// app can be built and wired up before real authentication exists.
//
// Structured so that JWT verification, refresh-token handling, and
// role-based access control (RBAC) can be dropped in later without
// changing how this middleware is consumed by routes.

/**
 * protect
 * Will eventually verify a JWT from the Authorization header and attach
 * the authenticated user to req.user. For now it simply calls next().
 *
 * Future implementation outline:
 *   1. Read token from `Authorization: Bearer <token>` header.
 *   2. Verify token using jsonwebtoken + process.env.JWT_SECRET.
 *   3. Fetch user from DB (or trust decoded payload) and attach to req.user.
 *   4. If verification fails, respond with 401 Unauthorized.
 */
const protect = (req, res, next) => {
  // TODO: Implement JWT verification here.
  // const authHeader = req.headers.authorization;
  // if (!authHeader || !authHeader.startsWith('Bearer ')) {
  //   return res.status(401).json({ success: false, message: 'Not authorized, no token' });
  // }
  // const token = authHeader.split(' ')[1];
  // try {
  //   const decoded = jwt.verify(token, process.env.JWT_SECRET);
  //   req.user = decoded;
  //   next();
  // } catch (error) {
  //   return res.status(401).json({ success: false, message: 'Not authorized, token failed' });
  // }

  next();
};

/**
 * authorize
 * Will eventually restrict access based on user role (RBAC).
 * Returns a middleware function so it can be used like: authorize('admin')
 *
 * Future implementation outline:
 *   1. Expect req.user to already be set by `protect`.
 *   2. Check req.user.role against the allowed roles passed in.
 *   3. If not allowed, respond with 403 Forbidden.
 */
const authorize = (...roles) => {
  return (req, res, next) => {
    // TODO: Implement role-based access control here.
    // if (!req.user || !roles.includes(req.user.role)) {
    //   return res.status(403).json({ success: false, message: 'Forbidden: insufficient permissions' });
    // }

    next();
  };
};

module.exports = { protect, authorize };
