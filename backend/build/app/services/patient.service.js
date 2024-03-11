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
const patients_model_1 = __importDefault(require("../models/patients.model"));
const services_model_1 = __importDefault(require("../models/services.model"));
const createPatient = (_a) => __awaiter(void 0, [_a], void 0, function* ({ address, birthDate, cpf, name, serviceId }) {
    const service = yield services_model_1.default.getServiceById(serviceId);
    if (!service) {
        return {
            data: {
                message: 'No agendamente in Service'
            },
            status: 401,
        };
    }
    const newPatient = yield patients_model_1.default.createPatients({ address, birthDate, cpf, name, phone: service === null || service === void 0 ? void 0 : service.phone });
    return {
        data: newPatient,
        status: 200,
    };
});
const patientService = {
    createPatient,
};
exports.default = patientService;
