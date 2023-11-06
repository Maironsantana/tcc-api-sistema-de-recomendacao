import { Request, Response } from "express";
import { GetMatchByAdvisorIdService } from "../../services/match/GetMatchByAdvisorIdService";


class GetMatchByAdvisorIdController {
  async handle(req: Request, res: Response) {
    const { advisor_id } = req.params

    const getMatchByAdvisorIdService = new GetMatchByAdvisorIdService();

    const matches = await getMatchByAdvisorIdService.execute({ advisor_id })

    return res.json(matches)
  }
}

export { GetMatchByAdvisorIdController }