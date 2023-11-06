import { BadRequestError } from "../../helpers/api-errors"
import prismaClient from "../../prisma"

interface CreateTccRequest {
  name: string
  author: string
  archive: string
  advisorId: string
  coAdvisorId?: string
}

class CreateTccService {
  async execute({ name, author, advisorId, coAdvisorId, archive }: CreateTccRequest) {
    if (!name) {
      throw new BadRequestError("Nome do artigo não informado")
    }

    const tccExists = prismaClient.tcc.findFirst({
      where: { name: name }
    })

    if (tccExists) {
      throw new BadRequestError("Artigo já cadastrado")
    }

    if (!author) {
      throw new BadRequestError("Nome do autor não informado")
    }

    if (!advisorId) {
      throw new BadRequestError("Orientador não informado")
    }

    if (!archive) {
      throw new BadRequestError("Arquivo não selecionado")
    }

    const tcc = await prismaClient.tcc.create({
      data: {
        name,
        author,
        archive,
        advisor: {
          connect: {
            id: advisorId
          }
        },
        coAdvisor: {
          connect: {
            id: coAdvisorId
          }
        }
      }
    })

    return tcc
  }
}

export { CreateTccService }