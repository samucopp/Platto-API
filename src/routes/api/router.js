import { Router } from "express";
import menuRouter from "./menuRouter.js";

const router = Router();

router.use('/menu', menuRouter);

export default router;