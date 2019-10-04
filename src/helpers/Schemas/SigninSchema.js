import joi from 'joi';
import { emailRegex, passwordRegex} from '../regex';

export const Signin = {
        email: joi.string().required().email().regex(emailRegex),
        password: joi.string().required().regex(passwordRegex)
}