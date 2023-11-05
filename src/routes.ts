import { Router } from "express";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { DeleteUserController } from "./controllers/user/DeleteUserController";
import { CreateAdvisorController } from "./controllers/advisor/CreateAdvisorController";
import { UpdateAdvisorController } from "./controllers/advisor/UpdateAdvisorController";
import { DeleteAdvisorController } from "./controllers/advisor/DeleteAdvisorController";
import { FetchAvisorController } from "./controllers/advisor/FetchAdvisorController";
import { GetAdvisorController } from "./controllers/advisor/GetAdvisorController";
import { FetchTopicsController } from "./controllers/topic/FetchTopicController";
import { GetAffinitiesByAdvisorController } from "./controllers/affinity/GetAffinitiesByAdvisorController";
import { GetAffinitiesByTopicController } from "./controllers/affinity/GetAffinitiesByTopicController";
import { FetchAvisorByVacancyController } from "./controllers/advisor/FetchAdvisorByVacancyController";
import { FetchTopicsByAreaController } from "./controllers/topic/FetchTopicsByAreaController";

const router = Router();

router.post("/signUp", new CreateUserController().handle);
router.post("/signIn", new AuthUserController().handle);
router.delete("/user/:id", [isAuthenticated], new DeleteUserController().handle);

router.get("/topics", new FetchTopicsController().handle);
router.get("/topics/:area", new FetchTopicsByAreaController().handle);

router.post('/advisor', [isAuthenticated], new CreateAdvisorController().handle);
router.put('/advisor/:id_advisor', [isAuthenticated], new UpdateAdvisorController().handle);
router.delete('/advisor/:id_advisor', [isAuthenticated], new DeleteAdvisorController().handle);
router.get('/advisor/pagination/:page', [isAuthenticated], new FetchAvisorController().handle);
router.get('/advisor/vacancy/:page', new FetchAvisorByVacancyController().handle);
router.get('/advisor/:id_advisor', [isAuthenticated], new GetAdvisorController().handle);

router.get('/affinity/advisor/:advisor_id', new GetAffinitiesByAdvisorController().handle);
router.get('/affinity/topic/:topic_id', new GetAffinitiesByTopicController().handle);


export { router }