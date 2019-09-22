import express from 'express';
import User from '../controllers/User';
import {validateSignup} from '../middleware/SignupValidator';
import {validateSignin} from '../middleware/SigninValidator';

const userRoutes = express.Router();

userRoutes.post('/auth/signup', validateSignup, User.signUp);

userRoutes.post('/auth/signin', validateSignin);



export default userRoutes;
