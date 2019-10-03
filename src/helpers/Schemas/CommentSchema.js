import joi from 'joi';

export const NewCommentSchema = {
    comment: joi.string().required().disallow('')
};