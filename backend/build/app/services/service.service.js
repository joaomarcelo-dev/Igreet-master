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
const services_model_1 = __importDefault(require("../models/services.model"));
const createService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ expirationTime, phone, time }) {
    const existService = yield services_model_1.default.getServiceByPhone(phone);
    if (existService) {
        return {
            data: existService,
            status: 200,
        };
    }
    const newService = yield services_model_1.default.createService({ expirationTime, phone, time });
    return {
        data: newService,
        status: 201,
    };
});
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
const getServiceById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const service = yield services_model_1.default.getServiceById(id);
    if (!service) {
        return {
            status: 404,
            data: {
                message: 'Service not found'
            }
        };
    }
    return {
        data: service,
        status: 200,
    };
});
const serviceService = {
    createService,
    getAllServices,
    deleteService,
    getServiceByPhone,
    getServiceById
};
exports.default = serviceService;
