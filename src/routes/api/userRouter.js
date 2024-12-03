import { Router } from "express";
import userApiController from "../../controllers/user/userApiController.js";
import { isAdmin, isAuthenticated } from "../../middleware/api/authMiddleware.js";

const router = Router();

router.get("/", isAuthenticated, userApiController.getAll);
router.get("/:id", isAuthenticated, userApiController.getOne);

router.post("/", isAdmin, userApiController.create);

router.put("/:id", isAdmin, userApiController.update);

router.delete("/:id", isAdmin, userApiController.remove);

export default router;