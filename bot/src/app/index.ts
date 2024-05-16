import { Whatsapp } from "venom-bot";

// const respostasClientes = {};

const respostasClientes: { [key: string]: any } = {};

// Definindo as etapas do fluxo de perguntas e respostas
type OpcaoType = {
  [key: string]: {
    mensagem: string;
    proximo: string;
  };
};

const fluxoPerguntas: {
  inicio: {
    mensagem: string;
    proximo: string;
  };
  opcao: OpcaoType;
  cpf: {
    mensagem: string;
    proximo: string;
  };
  cartaoSUS: {
    mensagem: string;
    proximo: string;
  };
  final: {
    mensagem: string;
    proximo: null;
  };
} = {
  inicio: {
    mensagem: 'Olá! O que você deseja?\n1 - Marcar uma consulta\n2 - Reclame aqui\n3 - Outros',
    proximo: 'opcao'
  },
  opcao: {
    '1': {
      mensagem: 'Por favor, digite seu nome:',
      proximo: 'cpf'
    },
    '2': {
      mensagem: 'Por favor, nos envie sua reclamação:',
      proximo: 'final'
    },
    '3': {
      mensagem: 'Como posso ajudar com "Outros"?',
      proximo: 'final'
    }
  },
  cpf: {
    mensagem: 'Por favor, digite seu CPF:',
    proximo: 'cartaoSUS'
  },
  cartaoSUS: {
    mensagem: 'Por favor, digite o número do seu cartão do SUS:',
    proximo: 'final'
  },
  final: {
    mensagem: 'Obrigado por fornecer suas informações!',
    proximo: null
  }
};

const startVenom = async (bot: Whatsapp) => {
  bot.onMessage(async (message) => {
    const chatId = message.from;
    const messageText = message.body;

    // Verifica se é a primeira interação com o cliente
    if (!respostasClientes[chatId]) {
      respostasClientes[chatId] = {
        etapaAtual: 'inicio'
      };
      // Envia a mensagem inicial
      bot.sendText(chatId, fluxoPerguntas.inicio.mensagem);
    } else {
      const etapaAtual = fluxoPerguntas[respostasClientes[chatId].etapaAtual];
      const proximoPasso = etapaAtual[messageText];

      // Verifica se a opção escolhida está mapeada para a etapa atual
      if (proximoPasso) {
        respostasClientes[chatId][respostasClientes[chatId].etapaAtual] = messageText;

        // Verifica se há um próximo passo no fluxo
        if (proximoPasso.proximo) {
          respostasClientes[chatId].etapaAtual = proximoPasso.proximo;
          bot.sendText(chatId, fluxoPerguntas[proximoPasso.proximo].mensagem);
        } else {
          // Se não houver próximo passo, finaliza o fluxo
          bot.sendText(chatId, fluxoPerguntas.final.mensagem);
          // Aqui você pode fazer algo com as informações armazenadas, como salvar em um banco de dados
          console.log(respostasClientes[chatId]);
          // Limpa as respostas do cliente após concluir o fluxo
          delete respostasClientes[chatId];
        }
      } else {
        bot.sendText(chatId, 'Desculpe, opção inválida.');
      }
    }
  });
};

export {
  startVenom,
}