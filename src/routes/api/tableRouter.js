import { Router } from "express";
import tableApiController from "../../controllers/table/tableApiController.js";
import middleware from "../../middleware/api/authMiddleware.js";

const router = Router();

router.get("/", middleware.isAuthenticated, tableApiController.getAll);
router.get("/:id", middleware.isAuthenticated, tableApiController.getOne);

router.post("/", middleware.isAdminOrWaiter, tableApiController.create);

router.put("/:id", middleware.isAdminOrWaiter, tableApiController.update);   

router.delete("/:id", middleware.isAdminOrWaiter, tableApiController.remove);

export default router;