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
const createAdm = (_a) => __awaiter(void 0, [_a], void 0, function* ({ email, name, password, photo }) {
    const newAdm = yield prisma_provider_1.default.adms.create({
        data: {
            name,
            email,
            password,
            photo,
        }
    });
    return newAdm;
});
const deleteAdm = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const adm = yield prisma_provider_1.default.adms.delete({
        where: {
            id
        }
    });
    return adm;
});
const admsModel = {
    createAdm,
    deleteAdm
};
exports.default = admsModel;
