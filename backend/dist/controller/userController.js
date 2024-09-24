"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = exports.getHelloWorld = void 0;
// src/services/helloService.ts
const argon2_1 = __importDefault(require("argon2"));
const userService_1 = require("../service/userService");
const constants_1 = require("../shared/constants");
const validationSchemas_1 = require("../shared/validationSchemas");
const enums_1 = require("../shared/enums");
const getHelloWorld = (req, res) => {
    const message = (0, userService_1.getApiGreetings)();
    res.status(200).json({
        message: message,
    });
};
exports.getHelloWorld = getHelloWorld;
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    try {
        const validatedData = validationSchemas_1.CreateUserSchema.safeParse(user);
        if (!validatedData.success) {
            return res.status(400).json(validatedData.error.issues);
        }
        const { firstName, lastName, contact, role } = user;
        let email = user.email.toLowerCase();
        const userExist = yield (0, userService_1.getUserByEmail)(email);
        if (userExist)
            return res.status(400).json({ error: constants_1.USERMESSAGE.EXIST.EMAIL });
        const hashedPassword = yield argon2_1.default.hash(email); //EMAIL IS THE DEFAULT PASSWORD
        yield (0, userService_1.createUser)({
            firstName,
            lastName,
            email,
            contact,
            role: enums_1.ROLES.EMPLOYEE,
            password: hashedPassword,
        });
        return res.status(201).json({
            success: constants_1.USERMESSAGE.SUCCESS.CREATED,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json(error);
    }
});
exports.registerUser = registerUser;
//# sourceMappingURL=userController.js.map