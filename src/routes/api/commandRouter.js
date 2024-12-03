import { Router } from "express";
import commandApiController from "../../controllers/command/commandApiController.js";
import { isAdminOrWaiter, isAuthenticated } from "../../middleware/api/authMiddleware.js";

const router = Router();

router.get("/", isAuthenticated, commandApiController.getAll);
router.get("/complete", isAuthenticated, commandApiController.getFullAll);
router.get("/:id", isAuthenticated, commandApiController.getOne);
router.get("/:id/details", isAuthenticated, commandApiController.getFullOne);

router.post("/", isAdminOrWaiter, commandApiController.create);
router.post("/:id/add-product", isAdminOrWaiter, commandApiController.addProduct);

router.put("/:id", isAdminOrWaiter, commandApiController.update);
router.put("/:id/update-product", isAdminOrWaiter, commandApiController.updateProduct);
router.put("/:id/close", isAdminOrWaiter, commandApiController.close);

router.delete("/:id", isAdminOrWaiter, commandApiController.remove);
router.delete("/:id/remove-product", isAdminOrWaiter, commandApiController.removeProduct);

export default router;