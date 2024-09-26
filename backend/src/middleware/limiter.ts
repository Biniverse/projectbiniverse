import rateLimit from "express-rate-limit";
import { ERROR } from "../shared/constants";
// General rate limiter for all routes
export const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
  message: ERROR.LIMIT,
  standardHeaders: true, // Send rate limit info in 'RateLimit-*' headers
  legacyHeaders: false, // Disable the 'X-RateLimit-*' headers
});
