import { Request, Response } from "express";
import { FetchTopicsService } from "../../services/topic/FetchTopicService";


class FetchTopicsController {
  async handle(req: Request, ress: Response) {
    const fetchTopicsService = new FetchTopicsService();

    const topics = await fetchTopicsService.execute()

    return ress.json(topics)
  }
}

export { FetchTopicsController }