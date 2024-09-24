"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUserByEmail = exports.getApiGreetings = void 0;
const userModel_1 = __importDefault(require("../model/userModel"));
const getApiGreetings = () => {
    let message = "Greetings from Biniverse API v1.0.0";
    return message;
};
exports.getApiGreetings = getApiGreetings;
const getUserByEmail = (email) => userModel_1.default.findOne({ email });
exports.getUserByEmail = getUserByEmail;
const createUser = (values) => new userModel_1.default(values).save().then((user) => user.toObject());
exports.createUser = createUser;
//# sourceMappingURL=userService.js.map