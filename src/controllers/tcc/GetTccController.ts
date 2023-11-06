import { Request, Response } from "express";
import { GetTccService } from "../../services/tcc/GetTccService";


class GetTccController {
  async handle(req: Request, res: Response) {
    const { tcc_id } = req.params;

    const getTccService = new GetTccService();

    const tcc = await getTccService.execute(tcc_id)

    return res.json(tcc)
  }
}

export { GetTccController }