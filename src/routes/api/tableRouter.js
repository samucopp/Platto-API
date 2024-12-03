import { Router } from "express";
import tableApiController from "../../controllers/table/tableApiController.js";
import { isAdminOrWaiter, isAuthenticated, isWaiter } from "../../middleware/api/authMiddleware.js";

const router = Router();

router.get("/", isAuthenticated, tableApiController.getAll);
router.get("/:id", isAuthenticated, tableApiController.getOne);

router.post("/", isAdminOrWaiter, tableApiController.create);

router.put("/:id", isAdminOrWaiter, tableApiController.update);   

router.delete("/:id", isAdminOrWaiter, tableApiController.remove);

export default router;