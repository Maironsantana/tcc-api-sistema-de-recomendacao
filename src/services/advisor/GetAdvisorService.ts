import { BadRequestError } from "../../helpers/api-errors";
import prismaClient from "../../prisma";


class GetAdvisorService {
  async execute(id_advisor: string) {
    const advisor = await prismaClient.advisor.findFirst({
      where: { id: id_advisor },
      include: {
        affinity: true
      }
    })

    if (!advisor) {
      throw new BadRequestError("Orientador não cadastrado")
    }

    return advisor
  }
}

export { GetAdvisorService }