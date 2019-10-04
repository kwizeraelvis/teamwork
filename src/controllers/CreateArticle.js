import ArticleModal from '../modals/ArticleModal';
import lodash from 'lodash';


export const NewArticle = (req, res) => {
    const article = lodash.pick(req.body,['title','content']);
    article.email = req.user.email;
    const saveArticle = ArticleModal.saveArticle(article);
    return res.status(200).send({
        status: 200,
        message: 'Article was successfully created',
        article: {
            Title: saveArticle.title,
            Article: saveArticle.article,
            WrittenBy: saveArticle.createdBy
        }
    });
}