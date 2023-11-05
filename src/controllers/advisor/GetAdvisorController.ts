import { Request, Response } from "express";
import { GetAdvisorService } from "../../services/advisor/GetAdvisorService";


class GetAdvisorController {
  async handle(req: Request, res: Response) {
    const { id_advisor } = req.params;

    const getAdvisorService = new GetAdvisorService();

    const advisor = await getAdvisorService.execute(id_advisor);

    return res.json(advisor);
  }
}

export { GetAdvisorController }