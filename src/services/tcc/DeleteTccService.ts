import { BadRequestError } from "../../helpers/api-errors";
import prismaClient from "../../prisma";


class DeleteTccService {
  async execute(id_tcc: string) {
    if (!id_tcc) {
      throw new BadRequestError("ID do TCC não informado")
    }

    const tcc = await prismaClient.tcc.delete({
      where: { id: id_tcc },
    });

    if (!tcc) {
      throw new BadRequestError("TCC não encontrado")
    }

    return {
      message: "TCC deletado com sucesso"
    }
  }
}

export { DeleteTccService }