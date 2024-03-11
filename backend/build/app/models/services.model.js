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
const prisma_provider_1 = __importDefault(require("../../providers/prisma.provider"));
const createService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ expirationTime, phone, time }) {
    const newService = yield prisma_provider_1.default.services.create({
        data: {
            expirationTime,
            phone,
            time,
        }
    });
    return newService;
});
const getAllServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const services = yield prisma_provider_1.default.services.findMany();
    return services;
});
const deleteService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const service = yield prisma_provider_1.default.services.delete({
        where: {
            id
        }
    });
    return service;
});
const getServiceByPhone = (phone) => __awaiter(void 0, void 0, void 0, function* () {
    const service = yield prisma_provider_1.default.services.findFirst({
        where: {
            phone
        }
    });
    return service;
});
const deleteServiceByPhone = (phone) => __awaiter(void 0, void 0, void 0, function* () {
    const service = yield prisma_provider_1.default.services.findFirst({
        where: {
            phone
        }
    });
    if (!service) {
        return null;
    }
    const serviceDeleted = yield prisma_provider_1.default.services.delete({
        where: {
            id: service.id
        }
    });
    return serviceDeleted;
});
const getServiceById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const service = yield prisma_provider_1.default.services.findFirst({
        where: {
            id
        }
    });
    return service;
});
const serviceModel = {
    createService,
    getAllServices,
    deleteService,
    getServiceByPhone,
    deleteServiceByPhone,
    getServiceById,
};
exports.default = serviceModel;
