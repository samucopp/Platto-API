import { Router } from "express";
import menuRouter from "./menuRouter.js";
import menuCategoryRouter from "./menuCategoryRouter.js";
import tableRouter from "./tableRouter.js";
import userRouter from "./userRouter.js";
import commandRouter from "./commandRouter.js";

const router = Router();

router.use("/menu", menuRouter);
router.use("/menu-category", menuCategoryRouter);
router.use("/table", tableRouter);
router.use("/user", userRouter);
router.use("/command", commandRouter);

export default router;