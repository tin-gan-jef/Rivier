import express from "express";
import { adminLogin, adminSignup } from "../controllers/auth.js";
const router = express.Router()

// ADMIN SIGNUP
router.post('/signup', adminSignup)

// ADMIN LOGIN
router.post('/signin', adminLogin)


export default router