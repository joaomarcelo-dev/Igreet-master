import prisma from "../../providers/prisma.provider";
import { AdmsInput } from "../../types/Adms.type";
import { LoginTypeInput } from "../../types/Login.type";

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

const getAdmByCredentials = async ({ name, password }: LoginTypeInput) => {
  const adm = await prisma.adms.findFirst({
    where: {
      name,
      password
    }
  })

  return adm
}

const admsModel = {
  createAdm,
  deleteAdm,
  getAdmByCredentials,
}

export default admsModel

