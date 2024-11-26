import { Router } from "express";
import apiRouter from "./api/router.js";
//import viewRouter from "./view/router.js";

const router = Router();

router.use('/api', apiRouter);

//router.use('/', viewRouter);

export default router;