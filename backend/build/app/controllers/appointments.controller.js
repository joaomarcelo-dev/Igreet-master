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
const appointment_service_1 = __importDefault(require("../services/appointment.service"));
const createAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { address, birthDate, cpf, date, hour, name, serviceId } = req.body;
    const { data, status } = yield appointment_service_1.default.createAppointment({ address, birthDate, cpf, date, hour, name, serviceId });
    return res.status(status).json(data);
});
const getAllAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, status } = yield appointment_service_1.default.getAllAppointments();
    return res.status(status).json(data);
});
const appointmentController = {
    createAppointment,
    getAllAppointments,
};
exports.default = appointmentController;
