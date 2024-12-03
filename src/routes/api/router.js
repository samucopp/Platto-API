import { Router } from "express";
import productRouter from "./productRouter.js";
import productCategoryRouter from "./productCategoryRouter.js";
import tableRouter from "./tableRouter.js";
import userRouter from "./userRouter.js";
import commandRouter from "./commandRouter.js";
import loginRouter from "./loginRouter.js";

const router = Router();

router.use("/product", productRouter);
router.use("/product-category", productCategoryRouter);
router.use("/table", tableRouter);
router.use("/user", userRouter);
router.use("/command", commandRouter);
router.use("/login", loginRouter);

export default router;