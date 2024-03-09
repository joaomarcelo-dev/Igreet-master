import { Whatsapp } from "venom-bot";

const startVenom = async (client: Whatsapp) => {
  client.onMessage((message) => {
    if(message.body === 'Oi') {
      client.sendText(message.from, 'Olá, tudo bem?');
    }
  });
}

export {
  startVenom,
}