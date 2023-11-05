import prismaClient from "../../prisma"


type GetAffinitiesProps = {
  advisor_id: string
}

class GetAffinitiesByAdvisorService {
  async execute({ advisor_id }: GetAffinitiesProps) {
    const affinities = await prismaClient.affinity.findMany({
      where: {
        advisorId: advisor_id,
      },
      select: {
        value: true,
        topic: {
          select: {
            name: true,
            area: true,
          }
        }
      }
    })

    return affinities
  }
}

export { GetAffinitiesByAdvisorService }