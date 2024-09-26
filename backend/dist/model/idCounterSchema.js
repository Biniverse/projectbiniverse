"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const counterSchema = new mongoose_1.default.Schema({
    _id: {
        type: String,
        required: true,
    },
    sequenceValue: {
        type: Number,
        default: 0,
    },
});
const Counter = mongoose_1.default.model("Counter", counterSchema);
exports.default = Counter;
//# sourceMappingURL=idCounterSchema.js.map