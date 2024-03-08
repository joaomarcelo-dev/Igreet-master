"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_provider_1 = __importDefault(require("../../providers/prisma.provider"));
const createService = ({ expirationTime, phone, time }) => {
    const newService = prisma_provider_1.default.services.create({
        data: {
            expirationTime,
            phone,
            time,
        }
    });
    return newService;
};
const getAllServices = () => {
    const services = prisma_provider_1.default.services.findMany();
    return services;
};
const deleteService = (id) => {
    const service = prisma_provider_1.default.services.delete({
        where: {
            id
        }
    });
    return service;
};
const getServiceByPhone = (phone) => {
    const service = prisma_provider_1.default.services.findFirst({
        where: {
            phone
        }
    });
    return service;
};
const serviceModel = {
    createService,
    getAllServices,
    deleteService,
    getServiceByPhone
};
exports.default = serviceModel;
