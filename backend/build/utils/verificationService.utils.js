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
exports.verificationExpirationServiceTime = void 0;
const services_model_1 = __importDefault(require("../app/models/services.model"));
const dayjs_1 = __importDefault(require("dayjs"));
const verificationExpirationServiceTime = (client) => __awaiter(void 0, void 0, void 0, function* () {
    const allServices = yield services_model_1.default.getAllServices();
    const serviceExpireds = allServices.map((service) => {
        if ((0, dayjs_1.default)().isAfter((0, dayjs_1.default)(service.expirationTime))) {
            services_model_1.default.deleteService(service.expirationTime);
            return service;
        }
    });
    serviceExpireds.forEach((service) => {
        if (service === null || service === void 0 ? void 0 : service.phone) {
            client.sendText(service.phone, `Olá, tudo bem? devido ao tempo de espera, seu atendimento foi cancelado.`);
        }
    });
});
exports.verificationExpirationServiceTime = verificationExpirationServiceTime;
