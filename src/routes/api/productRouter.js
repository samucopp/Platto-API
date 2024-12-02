import { Router } from "express";
import productApiController from "../../controllers/product/productApiController.js";

const router = Router();

router.get("/", productApiController.getAll);
router.get("/:id", productApiController.getOne);

router.post("/", productApiController.create);

router.put("/:id", productApiController.update);

router.delete("/:id", productApiController.remove);

export default router;