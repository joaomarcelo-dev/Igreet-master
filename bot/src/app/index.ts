import { Whatsapp } from "venom-bot";
import serviceServer from "../server/service.server";

const date = new Date()
const getIdFromUrl = async ({ phone }: {phone: string }) => {
  const response = await serviceServer.postService({ phone, time: `${date.getHours()}:${date.getMinutes()}` })

  return response.id
}

const startVenom = async (client: Whatsapp) => {
  client.onMessage(async (message) => {
    if (message.body.toLowerCase() === '!test') {
      await client.sendText(
        message.from,
        'Olá sou um assistente de atendimento. para marcar uma consulta, por favor preencha o formulário no link a seguir:'
      )

      await client.sendLinkPreview(message.from, `http://192.168.1.116:5173/new-appoinment/${await getIdFromUrl({ phone: message.from})}`, 'Link para realizar o preenchimento do form')
    }
  });
};

export {
  startVenom,
}