"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("./config/database");
const limiter_1 = require("./middleware/limiter");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
// Middleware
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(limiter_1.generalLimiter);
app.use(express_1.default.json());
// Routes
app.use("/", userRoutes_1.default);
// Start server
app.listen(port, () => {
    (0, database_1.connectDB)();
    console.log(`Server is running on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map