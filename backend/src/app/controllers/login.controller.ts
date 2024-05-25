import { Request, Response } from "express";
import { LoginSingInType } from "../../types/Login.type";
import loginService from "../services/login.service";

const login = async (req: Request, res: Response) => {
  const { email, password }: LoginSingInType = req.body;
  const { data, status } = await loginService.loginSingIn({ email, password });
  return res.status(status).json(data);
} 

const loginController = {
  login,
}

export default loginController;
