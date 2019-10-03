import express from 'express';
import VerifyToken from '../middleware/VerifyToken';
import {validateNewArticle} from '../middleware/NewArticleValidator';
import {NewArticle} from '../controllers/CreateArticle';
import {ShowAllArticles} from '../controllers/ViewArticles';
import {viewUserArticles} from '../controllers/ViewArticlesByUser';
import {DeleteanArticle} from '../controllers/DeleteArticle'
import {UpdateanArticle} from '../controllers/UpdateArticle'
import {NewCommentvalidator} from '../middleware/CommentValidator';
import CommentController from '../controllers/Comment';

const articleRouter = express.Router();

articleRouter.post('/articles', validateNewArticle, VerifyToken.verifyAuthToken, NewArticle);

articleRouter.post('/articles/:articleId/comments', NewCommentvalidator, VerifyToken.verifyAuthToken, CommentController.createComment);

articleRouter.get('/feeds', VerifyToken.verifyAuthToken, ShowAllArticles);

articleRouter.get('/feed/me', VerifyToken.verifyAuthToken, viewUserArticles);

articleRouter.delete('/articles/:articleId', VerifyToken.verifyAuthToken, DeleteanArticle);

articleRouter.patch('/articles/:articleId', VerifyToken.verifyAuthToken, UpdateanArticle)



export default articleRouter;