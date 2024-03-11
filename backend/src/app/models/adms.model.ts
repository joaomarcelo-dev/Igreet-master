import prisma from "../../providers/prisma.provider";
import { AdmsInput } from "../../types/Adms.type";

const createAdm = async ({ email, name, password, photo }: AdmsInput) => {
  const newAdm = await prisma.adms.create({
    data: {
      name,
      email,
      password,
      photo,
    }
  })

  return newAdm
}

const deleteAdm = async (id: string) => {
  const adm = await prisma.adms.delete({
    where: {
      id
    }
  })

  return adm
}

const admsModel = {
  createAdm,
  deleteAdm
}

export default admsModel

