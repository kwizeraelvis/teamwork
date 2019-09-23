import Joi from 'joi';
import {stringRegex, emailRegex, passwordRegex} from "../regex";
export const Signup = {
    firstName: Joi.string().required().min(1).max(30).regex(stringRegex),
    lastName:  Joi.string().required().min(1).max(30).regex(stringRegex),
    email:     Joi.string().required().email().regex(emailRegex),
    password:  Joi.string().required().min(8).max(10).regex(passwordRegex),
    gender:    Joi.string().required().min(1).max(6),
    jobRole:   Joi.string().required().min(1).max(30),
    department: Joi.string().required().min(1).max(30),
    address:    Joi.string().required().min(1).max(30),
    isAdmin:    Joi.boolean()
};