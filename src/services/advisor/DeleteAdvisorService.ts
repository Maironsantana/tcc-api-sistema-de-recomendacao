import { BadRequestError } from "../../helpers/api-errors";
import prismaClient from "../../prisma";


class DeleteAdvisorService {
  async execute(id_advisor: string) {
    if (!id_advisor) {
      throw new BadRequestError("ID do Orientador não informado");
    }

    const advisor = await prismaClient.advisor.delete({
      where: { id: id_advisor },
    });

    if (!advisor) {
      throw new BadRequestError("Orientador não encontrado");
    }

    return {
      message: "Orientador deletado com sucesso",
    };
  }
}

export { DeleteAdvisorService }