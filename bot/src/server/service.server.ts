import { requestServer } from "./request.server"

const postService = async ({ phone, time }: {phone: string, time: string}) => {
  const response = await requestServer({
    method: 'post',
    url: '/service',
    data: {
      phone,
      time,
    },
  });

  return response.data;
}

const serviceServer = {
  postService,
}

export default serviceServer;
