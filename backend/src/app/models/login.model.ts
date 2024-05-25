import prisma from "../../providers/prisma.provider";
import { LoginSingInType } from "../../types/Login.type";

const getLogin = async ({ email, password }: LoginSingInType) => prisma.login.findFirst({
  where: {
    email,
    password,
  }
});

const loginModel = {
  getLogin,
}

export default loginModel;
