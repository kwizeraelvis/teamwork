import express from 'express';
import VerifyToken from '../middleware/VerifyToken';
import {validateNewArticle} from '../middleware/NewArticleValidator';
import {NewArticle} from '../controllers/CreateArticle';

const articleRouter = express.Router();

articleRouter.post('/articles', validateNewArticle, VerifyToken.verifyAuthToken, NewArticle);


export default articleRouter;