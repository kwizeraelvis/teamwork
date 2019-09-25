import joi from 'joi';

export const ArticleSchema = {
     title: joi.string().required().min(1).max(225),
     content: joi.string().required()
};