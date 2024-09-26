"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generalLimiter = void 0;
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const constants_1 = require("../shared/constants");
// General rate limiter for all routes
exports.generalLimiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per window
    message: constants_1.ERROR.LIMIT,
    standardHeaders: true, // Send rate limit info in 'RateLimit-*' headers
    legacyHeaders: false, // Disable the 'X-RateLimit-*' headers
});
//# sourceMappingURL=limiter.js.map