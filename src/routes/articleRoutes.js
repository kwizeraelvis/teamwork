import express from 'express';
import VerifyToken from '../middleware/VerifyToken';
import {validateNewArticle} from '../middleware/NewArticleValidator';
import {NewArticle} from '../controllers/CreateArticle';
import {ShowAllArticles} from '../controllers/ViewArticles';

const articleRouter = express.Router();

articleRouter.post('/articles', validateNewArticle, VerifyToken.verifyAuthToken, NewArticle);

articleRouter.get('/feeds', VerifyToken.verifyAuthToken, ShowAllArticles);


export default articleRouter;