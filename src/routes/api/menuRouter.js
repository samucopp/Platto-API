import { Router } from "express";
import menuApiController from "./menuApiController.js";

const router = Router();

router.get('/', menuApiController.getAll);
router.get('/:id', menuApiController.getOne);

router.post('/', menuApiController.create);

router.put('/:id', menuApiController.update);

router.delete('/:id', menuApiController.remove);

export default router;