import prismaClient from "../../prisma";

interface FetchAdvisorRequest {
  page: number
}

type AdvisorWithRequests = {
  id: string;
  name: string;
  is_active: boolean;
  requests: number;
};

class FetchAdvisorService {
  async execute({ page }: FetchAdvisorRequest) {
    const pageSize = 5
    const skip = (page - 1) * pageSize;

    const advisors = await prismaClient.advisor.findMany({
      skip,
      take: pageSize,
      select: {
        id: true,
        name: true,
        is_active: true,
        requests: {
          select: {
            student_name: true,
            topic: true,
          }
        }
      }
    })
    const advisorWithRequest: AdvisorWithRequests[] = advisors.map((advisor) => ({
      id: advisor.id,
      name: advisor.name,
      is_active: advisor.is_active,
      requests: advisor.requests.length
    }))

    return advisorWithRequest
  }
}

export { FetchAdvisorService }