import { Router } from "express";
import menuRouter from "./menuRouter.js";
import menuCategoryRouter from "./menuCategoryRouter.js";

const router = Router();

router.use("/menu", menuRouter);
router.use("/menu-category", menuCategoryRouter);

export default router;