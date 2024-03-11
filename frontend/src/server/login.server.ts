import { LoginTypeInput } from "../types/Login.type";
import { BASE_URL, request } from "./request.server"

const loginRoute = `${BASE_URL}/login`

const loginAdm = async ({ name, password }: LoginTypeInput) => {
  const response = await request({
    method: 'post',
    url: `${loginRoute}`,
    data: { name, password }
  });

  return response.data;
}

const loginServer = {
  loginAdm,
}

export default loginServer;
