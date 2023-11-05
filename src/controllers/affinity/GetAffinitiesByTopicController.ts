import { Request, Response } from "express";
import { GetAffinitiesByTopicService } from "../../services/affinity/GetAffinitiesByTopicService";


class GetAffinitiesByTopicController {
  async handle(req: Request, res: Response) {
    const { topic_id } = req.params;

    const getAffinitiesByTopicService = new GetAffinitiesByTopicService();

    const affinities = await getAffinitiesByTopicService.execute({ topic_id })

    return res.json(affinities)
  }
}

export { GetAffinitiesByTopicController }