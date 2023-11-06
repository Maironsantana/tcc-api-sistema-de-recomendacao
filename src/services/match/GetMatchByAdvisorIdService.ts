import prismaClient from "../../prisma"

interface GetMatchByAdvisorIdRequest {
  advisor_id: string
}

class GetMatchByAdvisorIdService {
  async execute({ advisor_id }: GetMatchByAdvisorIdRequest) {
    const matches = await prismaClient.match.findMany({
      where: {
        advisorId: advisor_id,
        accepted: false,
      },
      include: {
        topic: true,
        advisor: true,
      }
    })

    return matches
  }
}

export { GetMatchByAdvisorIdService }