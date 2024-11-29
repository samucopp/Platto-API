import { Router } from "express";
import menuRouter from "./menuRouter.js";
import menuCategoryRouter from "./menuCategoryRouter.js";
import tableRouter from "./tableRouter.js";
import userRouter from "./userRouter.js";

const router = Router();

router.use("/menu", menuRouter);
router.use("/menu-category", menuCategoryRouter);
router.use("/table", tableRouter);
router.use("/user", userRouter);

export default router;