import { Request, Response } from "express";
import { FetchTopicsByAreaService } from "../../services/topic/FetchTopicsByAreaService";


class FetchTopicsByAreaController {
  async handle(req: Request, ress: Response) {
    const { area } = req.params

    const fetchTopicsByAreaService = new FetchTopicsByAreaService();

    const topics = await fetchTopicsByAreaService.execute({
      area
    })

    return ress.json(topics)
  }
}

export { FetchTopicsByAreaController }