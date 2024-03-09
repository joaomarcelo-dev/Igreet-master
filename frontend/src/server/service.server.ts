import { BASE_URL, request } from "./request.server"

const serviceRoute = `${BASE_URL}/service`

const getServerById = async (id: string) => {
  const response = await request({
    method: 'get',
    url: `${serviceRoute}/${id}`,
  });

  return response.data;
}

const serviceServer = {
  getServerById,
}

export default serviceServer;
