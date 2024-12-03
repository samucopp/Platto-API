import { Router } from "express";
import productCategoryApiController from "../../controllers/productCategory/productCategoryApiController.js";
import { isAdminOrChef, isAuthenticated } from "../../middleware/api/authMiddleware.js";

const router = Router();

router.get("/", isAuthenticated, productCategoryApiController.getAll);
router.get("/:id", isAuthenticated, productCategoryApiController.getOne);

router.post("/", isAdminOrChef, productCategoryApiController.create);

router.put("/:id", isAdminOrChef, productCategoryApiController.update);   

router.delete("/:id", isAdminOrChef, productCategoryApiController.remove);

export default router;