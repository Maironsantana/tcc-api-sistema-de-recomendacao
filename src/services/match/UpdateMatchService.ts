import { BadRequestError } from "../../helpers/api-errors"
import prismaClient from "../../prisma"

interface UpdateMatchRequest {
  id: string
  accepted: boolean
}

class UpdateMatchService {
  async execute({ id, accepted }: UpdateMatchRequest) {
    const matchExists = await prismaClient.match.findUnique({
      where: { id: id }
    })

    if (!matchExists) {
      throw new BadRequestError("Match não existe")
    }

    const match = await prismaClient.match.update({
      where: { id: matchExists.id },
      data: {
        accepted
      }
    })

    return {
      match,
      message: "Match aceito com sucesso"
    }
  }
}

export { UpdateMatchService }