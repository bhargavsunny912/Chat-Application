import express from 'express';
import { login, logout, otherUsers, register } from '../Controllers/usercontroller.js';
import isAuthenticated from '../utils/isAuthenticated.js';
const router=express.Router();

router.route('/register')
    .post(register)

router.route('/login')
    .post(login)

router.route('/logout')
    .get(logout)

router.route('/')
    .get(isAuthenticated,otherUsers)

export default router;