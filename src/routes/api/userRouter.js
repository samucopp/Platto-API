import { Router } from "express";
import userApiController from "../../controllers/user/userApiController.js";

const router = Router();

router.get("/", userApiController.getAll);
router.get("/:id", userApiController.getOne);

router.post("/", userApiController.create);

router.put("/:id", userApiController.update);

router.delete("/:id", userApiController.remove);

export default router;