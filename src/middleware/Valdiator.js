import Joi from 'joi';
import {Signup} from '../helpers/Schema';

class Valdiator {
    static  validateSignup(req, res, next){
        const { error } = Joi.validate(req.body, Signup);
        if(error){
            return res.status(422).send({ status: 422,error: error.details[0].message });
        }
        next();
    }
}

export default Valdiator;
