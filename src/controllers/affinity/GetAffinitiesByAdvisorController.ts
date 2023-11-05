import { Request, Response } from "express";
import { GetAffinitiesByAdvisorService } from "../../services/affinity/GetAffinitiesByAdvisorService";


class GetAffinitiesByAdvisorController {
  async handle(req: Request, res: Response) {
    const { advisor_id } = req.params;

    const getAffinitiesByAdvisorService = new GetAffinitiesByAdvisorService();

    const affinities = await getAffinitiesByAdvisorService.execute({
      advisor_id
    })

    return res.json(affinities);
  }
}

export { GetAffinitiesByAdvisorController }