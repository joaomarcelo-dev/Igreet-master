"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dayjs_1 = __importDefault(require("dayjs"));
const conf_1 = require("../conf");
const createTimeExpiry = () => {
    return (0, dayjs_1.default)().add(conf_1.timeExpiredInMinutes, 'minutes').format();
};
const nowTime = () => (0, dayjs_1.default)().format();
const dayJsUtils = {
    createTimeExpiry,
    nowTime,
};
exports.default = dayJsUtils;
