import { BadRequestError } from "../../helpers/api-errors";
import prismaClient from "../../prisma";


class DeleteMatchService {
  async execute(match_id: string) {
    if (!match_id) {
      throw new BadRequestError("ID do match não informado")
    }

    const match = await prismaClient.match.delete({
      where: { id: match_id }
    })

    if (!match) {
      throw new BadRequestError("Match não encontrado")
    }

    return {
      message: "Match recusado com sucesso"
    }
  }
}

export { DeleteMatchService }