import { BadRequestError } from "../../helpers/api-errors"
import prismaClient from "../../prisma";

interface MatchRequest {
  student_name: string
  topicId: string
  advisorId: string
}

class CreateMatchService {
  async execute({ student_name, topicId, advisorId }: MatchRequest) {
    if (!student_name) {
      throw new BadRequestError("Nome do aluno não informado");
    }
    if (!topicId) {
      throw new BadRequestError("Tópico não informado");
    }
    if (!advisorId) {
      throw new BadRequestError("Orientador não informado");
    }

    const match = await prismaClient.match.create({
      data: {
        student_name,
        topic: {
          connect: {
            id: topicId,
          },
        },
        advisor: {
          connect: {
            id: advisorId,
          },
        },
      }
    });

    return match
  }
}

export { CreateMatchService }