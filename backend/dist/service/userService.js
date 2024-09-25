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
exports.getAllUsers = exports.createUser = exports.getUserByEmail = exports.getApiGreetings = void 0;
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
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield userModel_1.default.find({});
    return users;
});
exports.getAllUsers = getAllUsers;
//# sourceMappingURL=userService.js.map