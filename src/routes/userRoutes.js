import express from 'express';
import User from '../controllers/User';
import {validateSignup} from '../middleware/SignupValidator'

const userRoutes = express.Router();

userRoutes.post('/auth/signup', validateSignup, User.signUp);



export default userRoutes;
