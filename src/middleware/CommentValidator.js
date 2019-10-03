import joi from  'joi';
import {NewCommentSchema} from '../helpers/Schemas/CommentSchema';

export const NewCommentvalidator = (req, res, next) => {
    const {error} = joi.validate(req.body, NewCommentSchema);
    if(error){
        return res.status(400).send({ status: 400, message: error.details[0].message });
    }
    next();
}