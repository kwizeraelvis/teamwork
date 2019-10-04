import joi from 'joi';
import {Signin} from '../helpers/Schemas/SigninSchema';

export const validateSignin = (req, res, next) => {
    const { error } = joi.validate(req.body, Signin);
    if(error){
        return res.status(400).send({ status: 400, message: error.details[0].message });
    }
    next();
}