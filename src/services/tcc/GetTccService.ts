import { BadRequestError } from "../../helpers/api-errors";
import prismaClient from "../../prisma";


class GetTccService {
  async execute(tcc_id: string) {
    const tcc = await prismaClient.tcc.findFirst({
      where: { id: tcc_id },
      include: {
        advisor: true,
        coAdvisor: true
      }
    })

    if (!tcc) {
      throw new BadRequestError("TCC não cadastrado")
    }

    return tcc
  }
}

export { GetTccService }