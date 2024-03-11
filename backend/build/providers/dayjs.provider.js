"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dayjsProvider = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const conf_1 = require("../conf");
const generateUnixTimestamp = () => {
    const nowTime = (0, dayjs_1.default)().unix();
    const timeExpiredUnix = nowTime + (conf_1.timeExpiredInMinutes * 60);
    const expiredTime = dayjs_1.default.unix(timeExpiredUnix);
    console.log('Data de expiração:', expiredTime.format('YYYY-MM-DD HH:mm:ss'));
    return expiredTime;
};
const verifyExpiredTime = (time) => {
    const timeIsExpired = (0, dayjs_1.default)().isAfter(time);
    return timeIsExpired;
};
exports.dayjsProvider = {
    generateUnixTimestamp,
    verifyExpiredTime,
};
