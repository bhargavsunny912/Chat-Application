import express from 'express';
import isAuthenticated from '../utils/isAuthenticated.js';
import { getMessage, sendMessage } from '../Controllers/Messagecontroller.js';
const router=express.Router();

router.route('/send/:id')
    .post(isAuthenticated,sendMessage)

router.route('/recieve/:id')
    .get(isAuthenticated,getMessage)

export default router;