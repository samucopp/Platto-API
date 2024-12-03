import { Router } from "express";
import commandApiController from "../../controllers/command/commandApiController.js";
import middleware from "../../middleware/api/authMiddleware.js";

const router = Router();

router.get("/", middleware.isAuthenticated, commandApiController.getAll);
router.get("/complete", middleware.isAuthenticated, commandApiController.getFullAll);
router.get("/:id", middleware.isAuthenticated, commandApiController.getOne);
router.get("/:id/details", middleware.isAuthenticated, commandApiController.getFullOne);

router.post("/", middleware.isAdminOrWaiter, commandApiController.create);
router.post("/:id/add-product", middleware.isAdminOrWaiter, commandApiController.addProduct);

router.put("/:id", middleware.isAdminOrWaiter, commandApiController.update);
router.put("/:id/update-product", middleware.isAdminOrWaiter, commandApiController.updateProduct);
router.put("/:id/close", middleware.isAdminOrWaiter, commandApiController.close);

router.delete("/:id", middleware.isAdminOrWaiter, commandApiController.remove);
router.delete("/:id/remove-product", middleware.isAdminOrWaiter, commandApiController.removeProduct);

export default router;