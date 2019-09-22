import express from 'express';
import User from '../controllers/User';
import Validator from '../middleware/Valdiator'


const userRoutes = express.Router();

userRoutes.post('/auth/signup', Validator.validateSignup, User.signUp);



export default userRoutes;
