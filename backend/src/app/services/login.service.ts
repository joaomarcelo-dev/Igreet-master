import jwtProvider from "../../providers/jwt.provider";
import { LoginSingInType } from "../../types/Login.type";
import { ReturnServiceType } from "../../types/ReturnService.type";
import loginModel from "../models/login.model";

const loginSingIn = async ({ email, password }: LoginSingInType): Promise<ReturnServiceType> => {
  const login = await loginModel.getLogin({ email, password });

  if (!login) {
    return {
      status: 401,
      data: {
        message: 'Email ou Senha inválidos'
      }
    }
  }

  const token = jwtProvider.sign(login);

  return {
    status: 200,
    data: {
      token,
      user: login,
    }
  }
}

const loginService = {
  loginSingIn,
}

export default loginService;
