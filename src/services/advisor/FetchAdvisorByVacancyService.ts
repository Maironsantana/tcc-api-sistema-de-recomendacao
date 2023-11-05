import prismaClient from "../../prisma";

interface FetchAdvisorRequest {
  page: number
}

type AdvisorWithRequests = {
  id: string;
  name: string;
  is_active: boolean;
};

class FetchAdvisorByVacancyService {
  async execute({ page }: FetchAdvisorRequest) {
    const pageSize = 5
    const skip = (page - 1) * pageSize;

    const advisors = await prismaClient.advisor.findMany({
      where: { is_active: true },
      skip,
      take: pageSize,
      orderBy: {
        total_vacancies: "desc",
      },
      select: {
        id: true,
        name: true,
        is_active: true,
        total_vacancies: true,
        affinity: {
          select: {
            advisor: true,
            advisorId: true,
            topic: true,
            topicId: true,
          }
        },
        relevance: {
          select: {
            advisor: true,
            advisorId: true,
            topic: true,
            topicId: true,
          }
        }
      }
    })
    const advisorWithRequest: AdvisorWithRequests[] = advisors.map((advisor) => ({
      id: advisor.id,
      name: advisor.name,
      is_active: advisor.is_active,
      total_vacancies: advisor.total_vacancies,
      affinity: advisor.affinity,
      relevance: advisor.relevance,
    }))

    return advisorWithRequest
  }
}

export { FetchAdvisorByVacancyService }