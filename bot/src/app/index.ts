import { Whatsapp } from "venom-bot";
import { BASE_URL, getAllDaysOfAtendence, postService } from "../api/web.request";
import { DayOfAtencenceType } from "../types/DaysOfAtendence.type";

const numberTmpMessage: string[] = []

const removeNumber = (number: string) => {
  const indexNumber = numberTmpMessage.indexOf(number);
  numberTmpMessage.splice(indexNumber, 1);
}

const startVenom = async (venom: Whatsapp) => {
  venom.onMessage(async (message) => {

    if (message.body === '!test') {
      if (!numberTmpMessage.includes(message.from)) {
        return await venom.sendText(message.from, '🤖 Olá tudo bem? Por favor digite o numero da ação desejada de acordo com a ordem abaixo ⬇️:\n\n1️⃣ - Verificar os dias disponiveis\n2️⃣ - Agendar uma consulta').then(() => {
          numberTmpMessage.push(message.from)
        })
      }
    }
    

    if(numberTmpMessage.includes(message.from)) {
      try {
        if (message.body === '1' || message.body === '1️⃣') {
          const { data }: { data: DayOfAtencenceType[] } = await getAllDaysOfAtendence();

          removeNumber(message.from)
          return await venom.sendText(message.from, `Os dias de antendimento disponiveis serão:\n\n${data.map((day, index) => `🗓 Dia - ${day.date.replace(/-/g, "/")} - Hora: ${day.hourStart}\n`).join().replace(/,/g, '')}\n\n Tenha um ótimo dia! 🌅🌞😉`)
        }

        if (message.body === '2' || message.body === '2️⃣') {
          const response = await postService({ imgURL: message.sender.profilePicThumbObj.eurl, phone: message.from });
          removeNumber(message.from)
          return await venom.sendText(message.from, `✅📃🎉 Para marcar a sua consulta por favor preencha o formulário no link a seguir 🔗: \n\n${BASE_URL}/form/${response.data.code}`)
        }
      } catch (error) {
        removeNumber(message.from)
        return await venom.sendText(message.from, '🤖 Desculpe... Ouve uma falha interna, acho que preciso me consultar também! 🩺🤕😿. Por favor, tente mais tarde!');
      }

      return await venom.sendText(message.from, 'Opção Invalida! Por favor digite uma opção válida: 1 ou 2')
    }
  })
};

export {
  startVenom,
}