import { Router } from "express";
import menuCategoryApiController from "../../controllers/menuCategory/menuCategoryApiController.js";

const router = Router();

router.get("/", menuCategoryApiController.getAll);
router.get("/:id", menuCategoryApiController.getOne);

router.post("/", menuCategoryApiController.create);

router.put("/:id", menuCategoryApiController.update);   

router.delete("/:id", menuCategoryApiController.remove);

export default router;