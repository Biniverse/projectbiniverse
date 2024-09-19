"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/helloRoute.ts
const express_1 = require("express");
const userController_1 = require("../controller/userController");
const userRouter = (0, express_1.Router)();
userRouter.get("/test", userController_1.getHelloWorld);
userRouter.post("/users", userController_1.createUser);
exports.default = userRouter;
//# sourceMappingURL=userRoutes.js.map