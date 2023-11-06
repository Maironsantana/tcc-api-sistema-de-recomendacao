import { Request, Response } from "express";
import { CreateMatchService } from "../../services/match/CreateMatchService";


class CreateMatchController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { student_name, topicId, advisorId } = req.body;

    const createMatchService = new CreateMatchService()

    const match = await createMatchService.execute({
      student_name,
      topicId,
      advisorId
    })

    return res.json(match)
  }
}

export { CreateMatchController }