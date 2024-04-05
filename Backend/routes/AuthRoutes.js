
import { Router } from "express";
const router = Router();

export const Register = (req, res) => {
   res.send("Register");
};

router.post('/register', Register);

export default router;
