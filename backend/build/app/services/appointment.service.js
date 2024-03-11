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
const appointments_model_1 = __importDefault(require("../models/appointments.model"));
const patients_model_1 = __importDefault(require("../models/patients.model"));
const services_model_1 = __importDefault(require("../models/services.model"));
const createAppointment = (_a) => __awaiter(void 0, [_a], void 0, function* ({ date, hour, address, birthDate, cpf, name, serviceId }) {
    const service = yield services_model_1.default.getServiceById(serviceId);
    if (!service) {
        return {
            data: {
                message: 'Nehum serviço foi agendado vai whatsapp para vc'
            },
            status: 401,
        };
    }
    const patient = yield patients_model_1.default.getPatientByCpf(cpf);
    if (!patient) {
        const newPatient = yield patients_model_1.default.createPatients({ address, birthDate, cpf, name, phone: service.phone });
        const newAppointment = yield appointments_model_1.default.createAppointment({ date, hour, patientId: newPatient.id });
        yield services_model_1.default.deleteService(service.id);
        return {
            data: newAppointment,
            status: 201,
        };
    }
    const newAppointment = yield appointments_model_1.default.createAppointment({ date, hour, patientId: patient.id });
    yield services_model_1.default.deleteService(service.id);
    return {
        status: 201,
        data: newAppointment
    };
});
const getAllAppointments = () => __awaiter(void 0, void 0, void 0, function* () {
    const appointments = yield appointments_model_1.default.getAllAppointments();
    return {
        status: 200,
        data: appointments
    };
});
const getAppointmentByDateEndPhone = (_b) => __awaiter(void 0, [_b], void 0, function* ({ date, phone }) {
    const appoinmet = yield appointments_model_1.default.getAppointmentByDateEndPhone({ date, phone });
    if (appoinmet == null) {
        return {
            status: 404,
            data: null
        };
    }
    return {
        data: appoinmet,
        status: 200,
    };
});
const appointmentService = {
    createAppointment,
    getAllAppointments,
};
exports.default = appointmentService;
