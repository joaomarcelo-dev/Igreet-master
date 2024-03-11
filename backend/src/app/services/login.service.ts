import jwtProvider from "../../providers/jwt.provider";
import { LoginTypeInput } from "../../types/Login.type";
import { ServiceReturnType } from "../../types/ServiceReturnType";
import admsModel from "../models/adms.model";

const login = async ({ password, name }: LoginTypeInput): Promise<ServiceReturnType> => {
  const adm = await admsModel.getAdmByCredentials({ password, name });

  if (!adm) {
    return {
      data: { message: "Invalid credentials" },
      status: 401,
    }
  }  

  const token = jwtProvider.sign({ id: adm.id });

  return {
    data: { token },
    status: 200,
  }
};

const loginService = {
  login
}

export default loginService;