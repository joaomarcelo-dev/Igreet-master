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
exports.initVenom = void 0;
const venom_bot_1 = require("venom-bot");
const schedule_1 = __importDefault(require("../schedule"));
const dayjs_utils_1 = __importDefault(require("../utils/dayjs.utils"));
const services_model_1 = __importDefault(require("../app/models/services.model"));
const conf_1 = require("../conf");
const initVenom = () => (0, venom_bot_1.create)({
    session: 'bot-atendimento',
}).then((client) => {
    start(client);
    (0, schedule_1.default)(client);
});
exports.initVenom = initVenom;
const start = (client) => __awaiter(void 0, void 0, void 0, function* () {
    client.onMessage((message) => __awaiter(void 0, void 0, void 0, function* () {
        yield services_model_1.default.createService({
            expirationTime: dayjs_utils_1.default.createTimeExpiry(),
            phone: message.from,
            time: dayjs_utils_1.default.nowTime(),
        });
        client.sendText(message.from, 'Olá tudo bem? Deseja argendar um atendimento?');
        client.sendButtons(message.from, '', 'Não', true);
        client.sendButtons(message.from, '', 'Sim', true);
        const includesInService = yield services_model_1.default.getServiceByPhone(message.from);
        if (includesInService && message.body === 'Sim') {
            client.sendText(message.from, `Por favor, preencha seus dados para agendar um atendimento: ${conf_1.baseUrlServer}/new-appoinment/${includesInService.id}`);
            yield services_model_1.default.deleteServiceByPhone(message.from);
        }
        else if (includesInService && message.body === 'Não') {
            client.sendText(message.from, 'Ok, até a próxima');
            yield services_model_1.default.deleteServiceByPhone(message.from);
        }
    }));
});
