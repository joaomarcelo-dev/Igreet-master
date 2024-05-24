// import { Message, Whatsapp } from "venom-bot";
// import { BASE_URL, BASE_URL_FRONT, getAllDaysOfAtendence, getPatientsByPhoneNumber, postService } from "../api/web.request";
// import { DayOfAtencenceType } from "../types/DaysOfAtendence.type";
// import { PatientType } from "../types/Patient.type";

// type MessageTemp = {
//   [phoneNumber: string]: {
//     step: {
//       name: string,
//       executed: boolean,
//     }
//   }
// }

// const numberTmpMessage: MessageTemp = {}

// const removeNumber = (number: string) => {
//   delete numberTmpMessage[number];
// }

// type MessagesType = {
//   [step: string]: {
//     options?: {
//       [nextStep: string]: string
//     },
//     key?: string,
//     action: (venom: Whatsapp, message: Message) => Promise<any>
//   }
// }

// const getNumber = (number: string | number): string => {
//   const numbersObject: { [key: string]: string } = {
//     '0': '0️⃣',
//     '1': '1️⃣',
//     '2': '2️⃣',
//     '3': '3️⃣',
//     '4': '4️⃣',
//     '5': '5️⃣',
//     '6': '6️⃣',
//     '7': '7️⃣',
//     '8': '8️⃣',
//     '9': '9️⃣',
//     '10': '🔟',
//   }

//   return `${numbersObject[number.toString()]}`
// }

// const dataSubmit: { dayOfAtencenceId: string, patientId: string, imgURL: string } = {
//   dayOfAtencenceId: '',
//   imgURL: '',
//   patientId: '',
// }

// const messages: MessagesType = {
//   initial: {
//     options: {
//       '1': 'sendDaysOfConsult',
//       '2': 'markConsult',
//     },
//     action: async (venom: Whatsapp, message: Message) => {
//       return await venom.sendText(message.from, '🤖 Olá tudo bem? Por favor digite o numero da ação desejada de acordo com a ordem abaixo ⬇️:\n\n1️⃣ - Verificar os dias disponiveis\n2️⃣ - Agendar uma consulta')
//     },
//   },

//   sendDaysOfConsult: {
//     action: async (venom: Whatsapp, message: Message) => {
//       const { data }: { data: DayOfAtencenceType[] } = await getAllDaysOfAtendence();
      
//       return await venom.sendText(message.from, `Os dias de antendimento disponiveis serão:\n\n${data.map((day, index) => `🗓 Dia - ${day.date.replace(/-/g, "/")} - Hora: ${day.hourStart}\n`).join().replace(/,/g, '')}\n\n Tenha um ótimo dia! 🌅🌞😉`)
//     },
//   },

//   markConsult: {
//     action: async (venom: Whatsapp, message: Message) => {
//       const { data }: { data: PatientType[] } = await getPatientsByPhoneNumber(message.from);

//       if (!data.length) {
//         const { data: service } = await postService({ imgURL: message.sender.profilePicThumbObj.eurl, phone: message.from });

//         return await venom.sendText(message.from, `Por favor preencha o formulário no link a seguir: ${BASE_URL_FRONT}/form/${service.code}`);
//       }

//       const arrayOptions = data.map(({ id, name }, index) => {
//         return {
//           id,
//           name,
//           index: index + 1,
//         }
//       });


//       arrayOptions.forEach((option) => {
//         messages['markConsult'].options = {
//           ...messages['markConsult'].options,
//           [option.index]: option.id
//         }

//         messages[option.id] = {
//           action: async (venom: Whatsapp, message: Message) => {
//             dataSubmit.patientId = option.id;
//             // await messages['sendDates'].action(venom, message)
//           },
//         }
//       });

//       const numberOutherOption = arrayOptions.length + 1

//       messages['markConsult'].options = {
//         ...messages['markConsult'].options,
//         [numberOutherOption]: 'markOutherConsult'
//       }
            
//       return await venom.sendText(message.from, `Para quem desejá marcar a consulta?\n\n${arrayOptions.map((option) => `${getNumber(option.index)} - ${option.name}`).join('\n')}\n${getNumber(numberOutherOption)} - Outra pessoa`)
//     }
//   },

//   sendDates: {
//     action: async (venom: Whatsapp, message: Message) => {
//       const { data: allDaysOfAtendence }: { data: DayOfAtencenceType[] } = await getAllDaysOfAtendence();

//       console.log(allDaysOfAtendence);
      

//       const arrayOptions = allDaysOfAtendence.map(({ id, date, hourStart }, index) => {
//         return {
//           id,
//           date,
//           hourStart,
//           index: index + 1,
//         }
//       });

//       arrayOptions.forEach((option) => {
//         messages['sendDates'].options = {
//           ...messages['sendDates'].options,
//           [option.index]: option.id
//         }

//         messages[option.id] = {
//           action: async (venom: Whatsapp, message: Message) => {
//             dataSubmit.dayOfAtencenceId = option.id;
//             dataSubmit.dayOfAtencenceId = message.sender.profilePicThumbObj.eurl;

//             await messages['confirmConsult'].action(venom, message)
//           },
//         }


//         console.log(messages[option.id]);
        
//       });

//       return await venom.sendText(message.from, `Qual dia vc deseja marcar a consulta?\n\n${arrayOptions.map((day) => `${getNumber(day.index)} - ${day.date} : ${day.hourStart}`).join('\n')}`)
//     }
//   },

//   confirmConsult: { 
//     options: {
//       1: 'confirm',
//       2: ''
//     },
//     action: async (venom: Whatsapp, message: Message) => {
//       return await venom.sendText(message.from, 'Deseja mesmo confirmar está operação?\n\n1️⃣ - SIM\n2️⃣ - NÂO')
//     },
//   },

//   confirm: {
//     action: async (venom: Whatsapp, message: Message) => {
//       return await venom.sendText(message.from, 'Consulta Marcada com sucesso!')
//     }
//   },

//   markOutherConsult: {
//     action: async(venom: Whatsapp, message: Message) => {
//       const { data: service } = await postService({ imgURL: message.sender.profilePicThumbObj.eurl, phone: message.from });

//       return await venom.sendText(message.from, `Por favor preencha o formulário no link a seguir: ${BASE_URL_FRONT}/form/${service.code}`);
//     }
//   }
// }

// const startVenom = async (venom: Whatsapp) => {
//   venom.onMessage(async (message) => {

//     if (message.body === '!test') {
//       if (!numberTmpMessage[message.from]) {
//         numberTmpMessage[message.from] = {
//           step: {
//             name: 'initial',
//             executed: false,
//           }
//         }
//       }
//     }
    
//     const userMessage = numberTmpMessage[message.from];

//     if(userMessage) {
//       try {
//         const { action, key, options } = messages[userMessage.step.name];
//         const { step: { executed, name } } = userMessage;

//         if (!executed) {
//           return await action(venom, message).then(() => {
//             numberTmpMessage[message.from].step = {
//               ...numberTmpMessage[message.from].step,
//               executed: true,
//             }            

//             if (!options) {
//               delete numberTmpMessage[message.from];

//               console.log(numberTmpMessage);
//             }
//           });

//         }

//         if (options) {
//           const nextStep = options[message.body];

//           if (!nextStep) return await venom.sendText(message.from, `Opção inválida. As opções válidas são:\n\n${Object.keys(options).join(' ')}`)

//           numberTmpMessage[message.from].step = {
//             executed: false,
//             name: nextStep,
//           }

//           const { action } = messages[nextStep]

//           return await action(venom, message).then(() => {
//             numberTmpMessage[message.from].step = {
//               ...numberTmpMessage[message.from].step,
//               executed: true,
//             }

//             const { action: optionsNew } = messages[nextStep]

//             if (!optionsNew) {
//               delete numberTmpMessage[message.from];
//             }
//           });
//         }
//       } catch (error) {
//         removeNumber(message.from)
//         return await venom.sendText(message.from, '🤖 Desculpe... Ouve uma falha interna, acho que preciso me consultar também! 🩺🤕😿. Por favor, tente mais tarde!');
//       }

//       return await venom.sendText(message.from, 'Reiniciando consulta')
//       delete numberTmpMessage[message.from]
//     }
//   })
// };

// export {
//   startVenom,
// }


// ^^^^^^^^^^^^^^ Minha solução ^^^^^^^^^^^^^^^^^ //



// =============== Solução desenvolvida com ajuda do GPT com base nos meus códigos ================ //

import { Message, Whatsapp } from "venom-bot";
import { BASE_URL, BASE_URL_FRONT, getAllDaysOfAtendence, getPatientsByPhoneNumber, postAppointment, postService } from "../api/web.request";
import { DayOfAtencenceType } from "../types/DaysOfAtendence.type";
import { PatientType } from "../types/Patient.type";

type State = 'initial' | 'waitingForInitialChoice' | 'sendDaysOfConsult' | 'markConsult' | 'sendDates' | 'selectPatient' | 'confirmConsult' | 'confirm' | 'markOutherConsult';

type UserState = {
  step: State,
  data?: any,
}

const userState: { [phoneNumber: string]: UserState } = {};

const getNumberEmoji = (number: number): string => {
  const numberEmojis = ['0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];
  return numberEmojis[number];
}

const formateDate = (date: string) => {
  const [year, mouth, day] = date.split('-');

  return `${day}/${mouth}/${year}`
}

const messages: { [key in State]: (venom: Whatsapp, message: Message, userState: UserState) => Promise<void> } = {
  initial: async (venom, message) => {
    await venom.sendText(message.from, '🤖 Olá, tudo bem? Por favor digite o número da ação desejada de acordo com a ordem abaixo ⬇️:\n\n1️⃣ - Verificar os dias disponíveis\n2️⃣ - Agendar uma consulta');
    userState[message.from].step = 'waitingForInitialChoice';
  },

  waitingForInitialChoice: async (venom, message) => {
    const choice = message.body.trim();
    if (choice === '1') {
      userState[message.from].step = 'sendDaysOfConsult';
      await messages.sendDaysOfConsult(venom, message, userState[message.from]);
    } else if (choice === '2') {
      const { data }: { data: PatientType[] } = await getPatientsByPhoneNumber(message.from);
      if (!data.length) {
        const { data: service } = await postService({ imgURL: message.sender.profilePicThumbObj.eurl, phone: message.from });
        await venom.sendText(message.from, `Por favor preencha o formulário no link a seguir: ${BASE_URL_FRONT}/form/${service.code}`);
        delete userState[message.from];
        return;
      }
      userState[message.from].step = 'markConsult';
      userState[message.from].data = { patients: data };
      await messages.markConsult(venom, message, userState[message.from]);
    } else {
      await venom.sendText(message.from, 'Opção inválida. Por favor, digite 1 para verificar os dias disponíveis ou 2 para agendar uma consulta.');
    }
  },
  sendDaysOfConsult: async (venom, message) => {
    const { data }: { data: DayOfAtencenceType[] } = await getAllDaysOfAtendence();
    await venom.sendText(message.from, `Os dias de atendimento disponíveis são:\n\n${data.map((day, index) => `🗓 Dia - ${formateDate(day.date)} - Hora: ${day.hourStart}\n`).join('')}\n\n Tenha um ótimo dia! 🌅🌞😉`);
    delete userState[message.from];
  },

  markConsult: async (venom, message, state) => {
    await messages.sendDates(venom, message, state);
  },

  sendDates: async (venom, message, state) => {
    const { data: allDaysOfAtendence }: { data: DayOfAtencenceType[] } = await getAllDaysOfAtendence();
    const options = allDaysOfAtendence.map((day: DayOfAtencenceType, index: number) => `${getNumberEmoji(index + 1)} - 🗓${day.title} - ${formateDate(day.date)}`).join('\n');
    await venom.sendText(message.from, `Qual dia você deseja marcar a consulta?\n\n${options}`);
    userState[message.from].step = 'selectPatient';
    userState[message.from].data.dates = allDaysOfAtendence;
  },

  selectPatient: async (venom, message, state) => {
    const selectedIndex = parseInt(message.body) - 1;
    const dates = state.data.dates;
    if (selectedIndex < 0 || selectedIndex >= dates.length) {
      await venom.sendText(message.from, 'Opção inválida, por favor escolha uma data válida.');
      return;
    }
    userState[message.from].data.selectedDate = dates[selectedIndex];

    const patients = state.data.patients;
    const options = patients.map((patient: PatientType, index: number) => `${getNumberEmoji(index + 1)} - ${patient.name}`).join('\n');
    await venom.sendText(message.from, `Para quem deseja marcar a consulta?\n\n${options}\n${getNumberEmoji(patients.length + 1)} - Outra pessoa`);
    userState[message.from].step = 'confirmConsult';
  },

  confirmConsult: async (venom, message, state) => {
    const selectedIndex = parseInt(message.body) - 1;
    const patients = state.data.patients;
    if (selectedIndex === patients.length) {
      await messages.markOutherConsult(venom, message, state);
      return;
    }

    if (selectedIndex < 0 || selectedIndex >= patients.length) {
      await venom.sendText(message.from, 'Opção inválida, por favor escolha uma opção válida.');
      return;
    }



    userState[message.from].data.selectedPatient = patients[selectedIndex];

    await venom.sendText(message.from, 'Deseja mesmo confirmar esta operação?\n\n1️⃣ - SIM\n2️⃣ - NÃO');
    userState[message.from].step = 'confirm';
  },

  confirm: async (venom, message, state) => {
    if (message.body === '1') {
      const { selectedPatient, selectedDate } = state.data;
      
      const { status } = await postAppointment({ 
        dayOfAtencenceId: selectedDate.id,
        patientId: selectedPatient.id,
        imgURL: message.sender.profilePicThumbObj.eurl,
      });

      if (status === 201) {
        await venom.sendText(message.from, `✅ Consulta marcada com sucesso ✅\n\nNome 🪪: ${selectedPatient.name}\nData 🗓: ${formateDate(selectedDate.date)}\nHorário ⌚️: ${selectedDate.hourStart}\n\nObrigado pela confiança! 😊`);
      } else {
        await venom.sendText(message.from, 'Erro interno ao marcar sua consulta')
      }

      delete userState[message.from];
    } else if (message.body === '2') {
      await venom.sendText(message.from, 'Operação cancelada.');
      delete userState[message.from];
    } else {
      await venom.sendText(message.from, 'Opção inválida, por favor escolha:\n\n1️⃣ para SIM\n2️⃣ para NÃO.');
    }
  },
  markOutherConsult: async (venom, message) => {
    const { data: service } = await postService({ imgURL: message.sender.profilePicThumbObj.eurl, phone: message.from });
    await venom.sendText(message.from, `Por favor preencha o formulário no link a seguir: ${BASE_URL_FRONT}/form/${service.code}`);
    delete userState[message.from];
  }
};

const startVenom = async (venom: Whatsapp) => {
  venom.onMessage(async (message) => {
    if (!userState[message.from]) {
      userState[message.from] = { step: 'initial' };
    }
    const state = userState[message.from];
    await messages[state.step](venom, message, state);
  });
};

export { startVenom };
