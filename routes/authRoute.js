import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
} from "../controllers/authController.js";
import { isAdmin, requrieSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//(Register , method post)
router.post("/register", registerController);

//login, method: post
router.post("/login", loginController);

//Forgot Password: Post
router.post("/forgot-password", forgotPasswordController);

// Protected Routes
router.get("/user-auth", requrieSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

router.get("/admin-auth", requrieSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//test Routes

router.get("/test", requrieSignIn, isAdmin, testController);

export default router;
