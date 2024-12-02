import { Router } from "express";
import productCategoryApiController from "../../controllers/productCategory/productCategoryApiController.js";

const router = Router();

router.get("/", productCategoryApiController.getAll);
router.get("/:id", productCategoryApiController.getOne);

router.post("/", productCategoryApiController.create);

router.put("/:id", productCategoryApiController.update);   

router.delete("/:id", productCategoryApiController.remove);

export default router;