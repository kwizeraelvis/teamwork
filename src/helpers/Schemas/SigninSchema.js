import joi from 'joi';
import { emailRegex, passwordRegex} from '../regex';

export const Signin = {
        email: joi.string().required().email().disallow(null).regex(emailRegex),
        password: joi.string().required().disallow(null).regex(passwordRegex)
}