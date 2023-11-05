import { BadRequestError } from "../../helpers/api-errors"
import prismaClient from "../../prisma"

type AffinityInput = {
  value: number
  topicId: string
}

interface AdvisorRequest {
  name: string
  total_vacancies: number

  affinities: AffinityInput[]
}

class CreateAdvisorService {
  async execute({ name, total_vacancies, affinities }: AdvisorRequest) {
    if (!name) {
      throw new BadRequestError("Nome não informado");
    }

    const advisorAlreadyExists = await prismaClient.advisor.findFirst({
      where: { name },
    })

    if (advisorAlreadyExists) {
      throw new BadRequestError("Orientador já cadastrado");
    }

    if (!total_vacancies) {
      throw new BadRequestError("Total de vagas não informado");
    }

    const advisor = await prismaClient.advisor.create({
      data: {
        name,
        total_vacancies,
        affinity: {
          create: affinities.map((affinity) => ({
            value: affinity.value,
            topic: {
              connect: { id: affinity.topicId }
            }
          }))
        }
      }
    })

    return {
      id: advisor.id,
      name: advisor.name,
      total_vacancies: advisor.total_vacancies,
      is_active: advisor.is_active,
      affinities
    }
  }
}

export { CreateAdvisorService }