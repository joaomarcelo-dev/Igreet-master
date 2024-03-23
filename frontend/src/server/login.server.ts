import { LoginTypeInput } from "../types/Login.type";
import { request } from "./request.server"

const loginRoute = '/login'

const loginAdm = async ({ name, password }: LoginTypeInput) => {
  const response = await request({
    method: 'post',
    url: `${loginRoute}`,
    data: { name, password }
  });

  return response;
}

const loginServer = {
  loginAdm,
}

export default loginServer;
