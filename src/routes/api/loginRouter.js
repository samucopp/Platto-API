import { Router } from "express";
import authApiController from "../../controllers/auth/authApiController.js";

const router = Router();

router.post("/", authApiController.login);

export default router;