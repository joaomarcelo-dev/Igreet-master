import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default prisma;


// async function deleteData() {
//   try {
//       // Substitua 'NomeDaTabela' pelo nome da tabela da qual você deseja excluir os dados
//       const deletedRows = await prisma.daysOfAtendence.deleteMany();
//       console.log(`Foram excluídas ${deletedRows.count} linhas da tabela.`);
//   } catch (error) {
//       console.error('Erro ao excluir os dados:', error);
//   } finally {
//       await prisma.$disconnect();
//   }
// }

// deleteData();