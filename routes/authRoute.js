import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requrieSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//(Register , method post)
router.post("/register", registerController);

//login, method: post
router.post("/login", loginController);

router.get("/test", requrieSignIn, isAdmin, testController);

export default router;
