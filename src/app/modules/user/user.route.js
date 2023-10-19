import express from "express";
import usercontroller from "./user.controller.js";

const userRoutes = express.Router();

userRoutes.post('/signup', usercontroller.createUser)
userRoutes.get('/', usercontroller.getUser)

export default userRoutes;