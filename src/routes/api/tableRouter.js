import { Router } from "express";
import tableApiController from "../../controllers/table/tableApiController.js";

const router = Router();

router.get("/", tableApiController.getAll);
router.get("/:id", tableApiController.getOne);

router.post("/", tableApiController.create);

router.put("/:id", tableApiController.update);   

router.delete("/:id", tableApiController.remove);

export default router;