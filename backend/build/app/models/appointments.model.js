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
const createAppointment = (_a) => __awaiter(void 0, [_a], void 0, function* ({ date, hour, patientId }) {
    const newAppointment = yield prisma_provider_1.default.appointments.create({
        data: {
            date,
            hour,
            patientId,
        },
        include: {
            patient: true
        }
    });
    return newAppointment;
});
const getAllAppointments = () => __awaiter(void 0, void 0, void 0, function* () {
    const appointments = yield prisma_provider_1.default.appointments.findMany({
        include: {
            patient: true
        }
    });
    return appointments;
});
const deleteAppointment = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield prisma_provider_1.default.appointments.delete({
        where: {
            id
        }
    });
    return appointment;
});
const getAppointmentByDateEndPhone = (_b) => __awaiter(void 0, [_b], void 0, function* ({ date, phone }) {
    const appoinmet = yield prisma_provider_1.default.appointments.findFirst({
        where: {
            date,
            patient: {
                phone
            }
        }
    });
});
const appointmentModel = {
    createAppointment,
    getAllAppointments,
    deleteAppointment,
    getAppointmentByDateEndPhone,
};
exports.default = appointmentModel;
