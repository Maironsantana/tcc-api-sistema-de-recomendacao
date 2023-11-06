import { BadRequestError } from "../../helpers/api-errors"
import prismaClient from "../../prisma"

interface UpdateTccRequest {
  id: string
  name: string
  author: string
  advisorId: string
  coAdvisorId?: string
}

class UpdateTccService {
  async execute({ id, name, author, advisorId, coAdvisorId }: UpdateTccRequest) {
    const tccExists = await prismaClient.tcc.findUnique({
      where: { id: id }
    })

    if (!tccExists) {
      throw new BadRequestError("Tcc não existe")
    }

    const tcc = await prismaClient.tcc.update({
      where: { id: tccExists.id },
      data: {
        name,
        author,
        advisor: {
          connect: {
            id: advisorId
          },
        },
        coAdvisor: {
          connect: {
            id: coAdvisorId
          }
        },
      }
    })

    return {
      tcc,
      message: "Informações do TCC atualizado com sucesso!"
    }
  }
}

export { UpdateTccService }