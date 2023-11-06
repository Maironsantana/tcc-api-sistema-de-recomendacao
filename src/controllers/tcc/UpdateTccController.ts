import { Request, Response } from "express";
import { UpdateTccService } from "../../services/tcc/UpdateTccService";


class UpdateTccController {
  async handle(req: Request, res: Response) {
    const { id_tcc } = req.params

    const {
      name,
      author,
      advisorId,
      coAdvisorId,
    } = req.body

    const updateTccService = new UpdateTccService()

    const tcc = updateTccService.execute({
      id: id_tcc,
      name,
      author,
      advisorId,
      coAdvisorId
    })

    return res.json(tcc)
  }
}

export { UpdateTccController }