import Joi from 'joi';
import {Signup} from '../helpers/Schemas/SignupSchema';

export const validateSignup = (req, res, next) => {
    const { error } = Joi.validate(req.body, Signup);
    if(error){
        return res.status(400).send({ status: 400,error: error.details[0].message });
    }
    next();
}