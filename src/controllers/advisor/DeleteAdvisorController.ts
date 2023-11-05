import { Request, Response } from "express";
import { DeleteAdvisorService } from "../../services/advisor/DeleteAdvisorService";


class DeleteAdvisorController {
  async handle(req: Request, res: Response) {
    const { id_advisor } = req.params;

    const deleteAdvisorService = new DeleteAdvisorService();

    const advisor = await deleteAdvisorService.execute(id_advisor);

    return res.json(advisor);
  }
}

export { DeleteAdvisorController };