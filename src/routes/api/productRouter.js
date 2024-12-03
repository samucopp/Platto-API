import { Router } from "express";
import productApiController from "../../controllers/product/productApiController.js";
import { isAdminOrChef, isAuthenticated } from "../../middleware/api/authMiddleware.js";

const router = Router();

router.get("/", isAuthenticated, productApiController.getAll);
router.get("/:id", isAuthenticated, productApiController.getOne);

router.post("/", isAdminOrChef, productApiController.create);

router.put("/:id", isAdminOrChef, productApiController.update);

router.delete("/:id", isAdminOrChef, productApiController.remove);

export default router;