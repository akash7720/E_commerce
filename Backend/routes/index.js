
import UserRoutes from'./user.routes.js';
import ProductRoutes from './product.routes.js'
import { Router } from 'express';

const router = Router();

router.use("/user", UserRoutes);
router.use("/product", ProductRoutes);

export default router;

