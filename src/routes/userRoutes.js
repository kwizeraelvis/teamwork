import express from 'express';
import { SignupUser } from '../controllers/signup';
import {validateSignup} from '../middleware/SignupValidator';
import {validateSignin} from '../middleware/SigninValidator';
import {SigninUser} from '../controllers/signin';

const userRoutes = express.Router();

userRoutes.post('/auth/signup', validateSignup, SignupUser);

userRoutes.post('/auth/signin', validateSignin, SigninUser);



export default userRoutes;
