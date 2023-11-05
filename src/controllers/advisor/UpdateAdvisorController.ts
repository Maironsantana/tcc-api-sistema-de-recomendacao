import { Request, Response } from "express";
import { UpdateAdvisorService } from "../../services/advisor/UpdateAdvisorService";

class UpdateAdvisorController {
  async handle(req: Request, res: Response) {
    const { id_advisor } = req.params;
    const {
      name,
      is_active,
      total_vacancies,
      affinities
    } = req.body

    const updateAdvisorService = new UpdateAdvisorService()

    const advisor = updateAdvisorService.execute({
      id: id_advisor,
      name,
      is_active,
      total_vacancies,
      affinities
    })

    return res.json(advisor)
  }
}

export { UpdateAdvisorController }