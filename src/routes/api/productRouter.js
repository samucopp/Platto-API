import { Router } from "express";
import productApiController from "../../controllers/product/productApiController.js";
import middleware from "../../middleware/api/authMiddleware.js";

const router = Router();

router.get("/", middleware.isAuthenticated, productApiController.getAll);
router.get("/category/:id", middleware.isAuthenticated, productApiController.getAllByCategory);
router.get("/:id", middleware.isAuthenticated, productApiController.getOne);

router.post("/", middleware.isAdminOrChef, productApiController.create);

router.put("/:id", middleware.isAdminOrChef, productApiController.update);

router.delete("/:id", middleware.isAdminOrChef, productApiController.remove);

export default router;