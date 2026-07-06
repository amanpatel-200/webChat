import express from "express";
import { getCurrentUser, getUserProfile, login, logout, Signup } from "../Controllers/UserController.js";
import isAuth from "../middleware/isAuth.js";
import { upload } from "../middleware/multer.js";
const userRouter = express.Router();
userRouter.post("/signup",upload.single("profilePic"),Signup);
userRouter.post("/login",login);
userRouter.post("/logout",logout);
userRouter.get("/getuserprofile",isAuth,getUserProfile);
userRouter.get("/currentuser",isAuth,getCurrentUser);

export default userRouter;
