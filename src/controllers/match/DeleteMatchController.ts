import { Request, Response } from "express";
import { DeleteMatchService } from "../../services/match/DeleteMatchService";


class DeleteMatchController {
  async handle(req: Request, res: Response) {
    const { match_id } = req.params

    const deleteMatchService = new DeleteMatchService();

    const match = await deleteMatchService.execute(match_id)

    return res.json(match)
  }
}

export { DeleteMatchController }