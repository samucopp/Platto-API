import { Router } from "express";
import commandApiController from "../../controllers/command/commandApiController.js";

const router = Router();

router.get("/", commandApiController.getAll);
router.get("/complete", commandApiController.getFullAll);
router.get("/:id", commandApiController.getOne);
router.get("/:id/details", commandApiController.getFullOne);

router.post("/", commandApiController.create);
router.post("/:id/add-product", commandApiController.addProduct);

router.put("/:id", commandApiController.update);
router.put("/:id/update-product", commandApiController.updateProduct);
router.put("/:id/close", commandApiController.close);

router.delete("/:id", commandApiController.remove);
router.delete("/:id/remove-product", commandApiController.removeProduct);

export default router;