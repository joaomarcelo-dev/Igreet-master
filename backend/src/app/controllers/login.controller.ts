import e, { Request, Response } from "express";
import loginService from "../services/login.service";

const login = async (req: Request, res: Response) => {
  const { password, name } = req.body;
  const { data, status } = await loginService.login({ password, name });
  return res.status(status).json(data);
}

const loginController = {
  login
}

export default loginController;
