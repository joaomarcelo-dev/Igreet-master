import { Whatsapp } from "venom-bot";
import serviceServer from "../server/service.server";

const date = new Date()
const getIdFromUrl = async ({ phone }: {phone: string }, client: Whatsapp) => {
  const response = await serviceServer.postService({ phone, time: `${date.getHours()}:${date.getMinutes()}` }).catch((error) => client.sendText(
    phone,
    error.message || 'Erro ao gerar link para formulário de agendamento. Por favor, tente novamente.'
  ))

  return response.id
}

const sendUrlAppointment = async (client: Whatsapp, phone: string) => {
  await client.sendText(phone, 'Aguarde! Estamos gerando o link para o formulário de agendamento.')

  const id = await getIdFromUrl({ phone }, client)

  if (!id) return

  await client.sendText(phone, 'Link gerado com sucesso! Clique no link a seguir para preencher o formulário de agendamento.')
  await client.sendLinkPreview(phone, `https://igreet-master-dtw8.vercel.app/new-appoinment/${id}`, 'Link para realizar o preenchimento do form')
}

const startVenom = async (client: Whatsapp) => {
  client.onMessage(async (message) => {
    if (message.body.toLowerCase() === '!test') {
      await client.sendText(
        message.from,
        'Olá sou um assistente de atendimento. para marcar uma consulta, por favor preencha o formulário no link a seguir:'
      )

      await sendUrlAppointment(client, message.from)
    }
  });
};

export {
  startVenom,
}