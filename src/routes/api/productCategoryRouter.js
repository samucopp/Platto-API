import { Router } from "express";
import productCategoryApiController from "../../controllers/productCategory/productCategoryApiController.js";
import middleware from "../../middleware/api/authMiddleware.js";

const router = Router();

router.get("/", middleware.isAuthenticated, productCategoryApiController.getAll);
router.get("/:id", middleware.isAuthenticated, productCategoryApiController.getOne);

router.post("/", middleware.isAdminOrChef, productCategoryApiController.create);

router.put("/:id", middleware.isAdminOrChef, productCategoryApiController.update);   

router.delete("/:id", middleware.isAdminOrChef, productCategoryApiController.remove);

export default router;