"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_model_1 = __importDefault(require("../models/services.model"));
const createService = ({ expirationTime, phone, time }) => {
    const newService = services_model_1.default.createService({ expirationTime, phone, time });
    return newService;
};
const getAllServices = () => {
    const services = services_model_1.default.getAllServices();
    return services;
};
const deleteService = (id) => {
    const service = services_model_1.default.deleteService(id);
    return service;
};
const getServiceByPhone = (phone) => {
    const service = services_model_1.default.getServiceByPhone(phone);
    return service;
};
const serviceService = {
    createService,
    getAllServices,
    deleteService,
    getServiceByPhone
};
exports.default = serviceService;
