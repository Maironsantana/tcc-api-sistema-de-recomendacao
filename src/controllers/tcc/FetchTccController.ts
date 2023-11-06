import { Request, Response } from "express";
import { FetchTccService } from "../../services/tcc/FetchTccService";


class FetchTccController {
  async handle(req: Request, res: Response) {
    const { page } = req.params

    const fetchTccService = new FetchTccService();

    const tcc = await fetchTccService.execute({
      page: Number(page),
    })

    return res.json(tcc)
  }
}

export { FetchTccController }