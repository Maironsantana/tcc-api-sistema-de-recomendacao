import { Router } from "express";
import multer from "multer";
import uploadConfig from "./config/multer";
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
import { CreateMatchController } from "./controllers/match/CreateMatchController";
import { GetMatchByAdvisorIdController } from "./controllers/match/GetMatchByAdvisorIdController";
import { DeleteMatchController } from "./controllers/match/DeleteMatchController";
import { UpdateMatchController } from "./controllers/match/UpdateMatchController";
import { CreateTccController } from "./controllers/tcc/CreateTccController";
import { UpdateTccController } from "./controllers/tcc/UpdateTccController";
import { DeleteTccController } from "./controllers/tcc/DeleteTccController";
import { GetTccController } from "./controllers/tcc/GetTccController";
import { FetchTccController } from "./controllers/tcc/FetchTccController";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

router.post("/signUp", new CreateUserController().handle);
router.post("/signIn", new AuthUserController().handle);
router.delete("/user/:id", isAuthenticated, new DeleteUserController().handle);

router.get("/topics", new FetchTopicsController().handle);
router.get("/topics/:area", new FetchTopicsByAreaController().handle);

router.post('/advisor', isAuthenticated, new CreateAdvisorController().handle);
router.put('/advisor/:id_advisor', isAuthenticated, new UpdateAdvisorController().handle);
router.delete('/advisor/:id_advisor', isAuthenticated, new DeleteAdvisorController().handle);
router.get('/advisor/pagination/:page', isAuthenticated, new FetchAvisorController().handle);
router.get('/advisor/vacancy/:page', new FetchAvisorByVacancyController().handle);
router.get('/advisor/:id_advisor', isAuthenticated, new GetAdvisorController().handle);

router.get('/affinity/advisor/:advisor_id', new GetAffinitiesByAdvisorController().handle);
router.get('/affinity/topic/:topic_id', new GetAffinitiesByTopicController().handle);

router.post('/match', new CreateMatchController().handle);
router.put('/match/:match_id', isAuthenticated, new UpdateMatchController().handle);
router.get('/match/:advisor_id', isAuthenticated, new GetMatchByAdvisorIdController().handle);
router.delete('/match/:match_id', isAuthenticated, new DeleteMatchController().handle);

router.post('/tcc', isAuthenticated, upload.single("file"), new CreateTccController().handle);
router.put('/tcc/:id_tcc', isAuthenticated, new UpdateTccController().handle);
router.delete('/tcc/:tcc_id', isAuthenticated, new DeleteTccController().handle);
router.get("/tcc/:tcc_id", new GetTccController().handle);
router.get("/tcc/pagination/:page", isAuthenticated, new FetchTccController().handle);


export { router }