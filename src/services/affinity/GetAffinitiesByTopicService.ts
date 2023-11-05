import prismaClient from "../../prisma";

type GetAffinitiesProps = {
  topic_id: string
}

class GetAffinitiesByTopicService {
  async execute({ topic_id }: GetAffinitiesProps) {
    const affinities = await prismaClient.affinity.findMany({
      where: {
        topicId: topic_id,
      },
      orderBy: {
        value: 'desc',
      },
      select: {
        id: true,
        value: true,
        advisor: true,
        advisorId: true,
      }
    })

    return affinities
  }
}

export { GetAffinitiesByTopicService }