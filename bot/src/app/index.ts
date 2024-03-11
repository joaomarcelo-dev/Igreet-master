import { Whatsapp } from "venom-bot";
import serviceServer from "../server/service.server";

const date = new Date()
const getIdFromUrl = async ({ phone }: {phone: string }, client: Whatsapp) => {
  const response = await serviceServer.postService({ phone, time: `${date.getHours()}:${date.getMinutes()}` }).catch(() => client.sendText(phone, 'Ocorreu um erro ao tentar marcar a consulta, por favor tente novamente mais tarde'))

  return response.id
}

const startVenom = async (client: Whatsapp) => {
  client.onMessage(async (message) => {
    if (message.body.toLowerCase() === '!test') {
      await client.sendText(
        message.from,
        'Olá sou um assistente de atendimento. para marcar uma consulta, por favor preencha o formulário no link a seguir:'
      )

      await client.sendLinkPreview(message.from, `https://igreet-master-dtw8.vercel.app/new-appoinment/${await getIdFromUrl({ phone: message.from}, client)}`, 'Link para realizar o preenchimento do form')
    }
  });
};

export {
  startVenom,
}