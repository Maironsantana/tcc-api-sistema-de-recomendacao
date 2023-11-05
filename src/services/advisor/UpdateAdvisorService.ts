import { BadRequestError } from "../../helpers/api-errors"
import prismaClient from "../../prisma"

type AffinityInput = {
  id: string
  value: number
  topicId: string
}

interface UpdateAdvisorRequest {
  id: string
  name?: string
  is_active?: boolean
  total_vacancies?: number

  affinities?: AffinityInput[]
}

class UpdateAdvisorService {
  async execute({
    id,
    is_active,
    name,
    total_vacancies,
    affinities
  }: UpdateAdvisorRequest) {
    const advisorExists = await prismaClient.advisor.findUnique({
      where: { id: id },
      include: {
        affinity: true
      }
    })

    if (!advisorExists) {
      throw new BadRequestError("Orientador não existe")
    }
    const advisorWithoutAffinity = await prismaClient.advisor.update({
      where: { id: advisorExists.id },
      data: {
        affinity: {
          deleteMany: {}
        }
      }
    });

    const advisor = await prismaClient.advisor.update({
      where: { id: advisorWithoutAffinity.id },
      data: {
        name,
        is_active,
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
      advisor,
      message: "Professor autalizado com sucesso!"
    }
  }
}

export { UpdateAdvisorService }