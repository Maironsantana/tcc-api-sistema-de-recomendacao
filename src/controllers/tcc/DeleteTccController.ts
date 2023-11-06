import { Request, Response } from "express";
import { DeleteTccService } from "../../services/tcc/DeleteTccService";


class DeleteTccController {
  async handle(req: Request, res: Response) {
    const { tcc_id } = req.params

    const deleteTccService = new DeleteTccService();

    const tcc = await deleteTccService.execute(tcc_id);

    return res.json(tcc)
  }
}

export { DeleteTccController }