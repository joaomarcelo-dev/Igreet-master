import { request } from "./request.server"

const serviceRoute = '/service'

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
