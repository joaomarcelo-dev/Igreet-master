import { Message, Whatsapp } from "venom-bot";
import { BASE_URL, getAllDaysOfAtendence, postService } from "../api/web.request";
import { DayOfAtencenceType } from "../types/DaysOfAtendence.type";

type MessageTemp = {
  [phoneNumber: string]: {
    step: {
      name: string,
      executed: boolean,
    }
  }
}

const numberTmpMessage: MessageTemp = {}

const removeNumber = (number: string) => {
  delete numberTmpMessage[number];
}

type MessagesType = {
  [step: string]: {
    options?: {
      [nextStep: string]: string
    },
    key?: string,
    action: (venom: Whatsapp, message: Message) => Promise<any>
  }
}

const messages: MessagesType = {
  initial: {
    options: {
      '1': 'sendDaysOfConsult',
      '2': 'markConsult',
    },
    action: async (venom: Whatsapp, message: Message) => {
      return await venom.sendText(message.from, '🤖 Olá tudo bem? Por favor digite o numero da ação desejada de acordo com a ordem abaixo ⬇️:\n\n1️⃣ - Verificar os dias disponiveis\n2️⃣ - Agendar uma consulta')
    },
  },

  sendDaysOfConsult: {
    action: async (venom: Whatsapp, message: Message) => {
      const { data }: { data: DayOfAtencenceType[] } = await getAllDaysOfAtendence();
      removeNumber(message.from)
      return await venom.sendText(message.from, `Os dias de antendimento disponiveis serão:\n\n${data.map((day, index) => `🗓 Dia - ${day.date.replace(/-/g, "/")} - Hora: ${day.hourStart}\n`).join().replace(/,/g, '')}\n\n Tenha um ótimo dia! 🌅🌞😉`)
    },
  },

  markConsult: {
    action: async (venom: Whatsapp, message: Message) => {
      return await venom.sendText(message.from, 'Funcionalidade ainda não disponivel!');
    }
  }
}

const startVenom = async (venom: Whatsapp) => {
  venom.onMessage(async (message) => {

    if (message.body === '!test') {
      if (!numberTmpMessage[message.from]) {
        numberTmpMessage[message.from] = {
          step: {
            name: 'initial',
            executed: false,
          }
        }
      }
    }
    
    const userMessage = numberTmpMessage[message.from];

    if(userMessage) {
      try {
        const { action, key, options } = messages[userMessage.step.name];
        const { step: { executed, name } } = userMessage;

        if (!executed) {
          return await action(venom, message).then(() => {
            numberTmpMessage[message.from].step = {
              ...numberTmpMessage[message.from].step,
              executed: true,
            }

            if (!options) {
              delete numberTmpMessage[message.from];

              console.log(numberTmpMessage);
            }
          });

        }

        if (options) {
          const nextStep = options[message.body];

          if (!nextStep) return await venom.sendText(message.from, `Opção inválida. As opções válidas são:\n\n${Object.keys(options).join(' ')}`)

          numberTmpMessage[message.from].step = {
            executed: false,
            name: nextStep,
          }

          const { action } = messages[nextStep]

          return await action(venom, message).then(() => {
            numberTmpMessage[message.from].step = {
              ...numberTmpMessage[message.from].step,
              executed: true,
            }
          });
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