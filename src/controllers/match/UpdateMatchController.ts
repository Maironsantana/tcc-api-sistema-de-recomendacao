import { Request, Response } from "express";
import { UpdateMatchService } from "../../services/match/UpdateMatchService";


class UpdateMatchController {
  async handle(req: Request, res: Response) {
    const { match_id } = req.params;

    const { accepted } = req.body

    const updateMatchService = new UpdateMatchService()

    const match = updateMatchService.execute({
      id: match_id,
      accepted
    })

    return res.json(match)
  }
}

export { UpdateMatchController }