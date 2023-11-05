import { Request, Response } from "express";
import { CreateAdvisorService } from "../../services/advisor/CreateAdvisorService";


class CreateAdvisorController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, total_vacancies, affinities } = req.body;

    const createAdvisorService = new CreateAdvisorService()

    const advisor = await createAdvisorService.execute({
      name,
      total_vacancies,
      affinities
    })

    return res.json(advisor)
  }
}

export { CreateAdvisorController }