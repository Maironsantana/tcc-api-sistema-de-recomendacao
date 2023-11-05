import prismaClient from "../../prisma";

interface FetchTopicsByAreaProps {
  area: string
}

class FetchTopicsByAreaService {
  async execute({ area }: FetchTopicsByAreaProps) {
    const topics = await prismaClient.topic.findMany({
      where: { area: area }
    })

    return topics
  }
}

export { FetchTopicsByAreaService }