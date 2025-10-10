"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = hashPassword;
exports.comparePassword = comparePassword;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const saltRounds = 10;
async function hashPassword(password) {
    const salt = await bcryptjs_1.default.genSalt(saltRounds);
    const hashedPassword = await bcryptjs_1.default.hash(password, salt);
    return hashedPassword;
}
async function comparePassword(password, hashedPassword) {
    const isMatch = await bcryptjs_1.default.compare(password, hashedPassword);
    return isMatch;
}
