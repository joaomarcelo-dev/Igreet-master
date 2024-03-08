"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_service_1 = __importDefault(require("../app/services/service.service"));
const addNumberInService = ({ expirationTime, phone, time }) => {
    const service = service_service_1.default.createService({ phone, expirationTime, time });
    return service;
};
const createServiceUtils = {
    addNumberInService
};
exports.default = addNumberInService;
