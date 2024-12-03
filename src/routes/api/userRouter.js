import { Router } from "express";
import userApiController from "../../controllers/user/userApiController.js";
import middleware from "../../middleware/api/authMiddleware.js";

const router = Router();

router.get("/", middleware.isAuthenticated, userApiController.getAll);
router.get("/:id", middleware.isAuthenticated, userApiController.getOne);

router.post("/", middleware.isAdmin, userApiController.create);

router.put("/:id", middleware.isAdmin, userApiController.update);

router.delete("/:id", middleware.isAdmin, userApiController.remove);

export default router;