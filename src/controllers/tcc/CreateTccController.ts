import { Request, Response } from "express";
import { CreateTccService } from "../../services/tcc/CreateTccService";


class CreateTccController {
  async handle(req: Request, res: Response) {
    const { name, author, advisorId, coAdvisorId } = req.body;

    const { filename: archive } = req.file;

    const createTccService = new CreateTccService();

    const tcc = await createTccService.execute({
      name,
      author,
      advisorId,
      coAdvisorId,
      archive
    });

    return res.json(tcc)
  }
}

export { CreateTccController }