import { Router } from "express";
import menuRouter from "./menuRouter.js";
import menuCategoryRouter from "./menuCategoryRouter.js";
import tableRouter from "./tableRouter.js";

const router = Router();

router.use("/menu", menuRouter);
router.use("/menu-category", menuCategoryRouter);
router.use("/table", tableRouter);

export default router;