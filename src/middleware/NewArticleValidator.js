import joi from 'joi'
import {ArticleSchema} from '../helpers/Schemas/NewArticleSchema';

export const validateNewArticle = (req, res, next) => {
        const {error} = joi.validate(req.body, ArticleSchema);
        if(error)return res.status(422).send({status: 422, error: error.details[0].message});
        next();
};
