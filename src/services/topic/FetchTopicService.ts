import prismaClient from "../../prisma";


class FetchTopicsService {
  async execute() {
    const topics = await prismaClient.topic.findMany()

    return topics
  }
}

export { FetchTopicsService }