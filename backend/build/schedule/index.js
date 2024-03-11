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
const node_schedule_1 = __importDefault(require("node-schedule"));
const conf_1 = require("../conf");
const services_model_1 = __importDefault(require("../app/models/services.model"));
const dayjs_provider_1 = require("../providers/dayjs.provider");
node_schedule_1.default.scheduleJob(`*/${conf_1.timeScheduleInMinuts} * * * *`, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Executando a função a cada', conf_1.timeScheduleInMinuts, 'minutos.');
    const allService = yield services_model_1.default.getAllServices();
    allService.forEach((service) => __awaiter(void 0, void 0, void 0, function* () {
        const timeIsExpired = dayjs_provider_1.dayjsProvider.verifyExpiredTime(service.expirationTime);
        if (timeIsExpired) {
            yield services_model_1.default.deleteService(service.id);
            console.log('Mensagem expirada:', service.id);
        }
    }));
}));
