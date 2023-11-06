import prismaClient from "../../prisma";

interface FetchTccRequest {
  page: number
}

class FetchTccService {
  async execute({ page }: FetchTccRequest) {
    const pageSize = 5
    const skip = (page - 1) * pageSize;

    const tccs = await prismaClient.tcc.findMany({
      skip,
      take: pageSize,
      select: {
        id: true,
        name: true,
        author: true,
      }
    })

    return tccs
  }
}

export { FetchTccService }