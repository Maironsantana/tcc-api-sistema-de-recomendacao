import { Request, Response } from "express";
import { FetchAdvisorService } from "../../services/advisor/FetchAdvisorService";


class FetchAvisorController {
  async handle(req: Request, res: Response) {
    const { page } = req.params

    const fetchAdvisorService = new FetchAdvisorService();

    const advisor = await fetchAdvisorService.execute({
      page: Number(page),
    })

    return res.json(advisor)
  }
}

export { FetchAvisorController }