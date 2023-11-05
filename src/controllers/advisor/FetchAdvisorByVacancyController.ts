import { Request, Response } from "express";
import { FetchAdvisorByVacancyService } from "../../services/advisor/FetchAdvisorByVacancyService";


class FetchAvisorByVacancyController {
  async handle(req: Request, res: Response) {
    const { page } = req.params

    const fetchAdvisorByVacancyService = new FetchAdvisorByVacancyService();

    const advisor = await fetchAdvisorByVacancyService.execute({
      page: Number(page),
    })

    return res.json(advisor)
  }
}

export { FetchAvisorByVacancyController }