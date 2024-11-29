import { Router } from "express";
import commandApiController from "../../controllers/command/commandApiController.js";

const router = Router();

router.get("/", commandApiController.getAll);
router.get("/:id", commandApiController.getOne);

router.post("/", commandApiController.create);

router.put("/:id", commandApiController.update);

router.delete("/:id", commandApiController.remove);

export default router;