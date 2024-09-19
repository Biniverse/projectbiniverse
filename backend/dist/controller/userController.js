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
exports.createUser = exports.getHelloWorld = void 0;
const userService_1 = require("../service/userService");
const userModel_1 = __importDefault(require("../model/userModel"));
const getHelloWorld = (req, res) => {
    const message = (0, userService_1.getApiGreetings)();
    res.status(200).json({
        message: message,
    });
};
exports.getHelloWorld = getHelloWorld;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    const newUser = new userModel_1.default(user);
    try {
        yield newUser.save();
        res.status(201).json({
            status: 201,
            data: newUser
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
});
exports.createUser = createUser;
//# sourceMappingURL=userController.js.map