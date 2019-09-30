import ArticleModal from '../modals/ArticleModal';
import lodash from 'lodash';


export const UpdateanArticle = (req, res) => {
    const article = ArticleModal.findArticle(req.params.articleId)
    if(!article){ return res.status(404).send({status: 404, message: 'Article was not found'})}
    const newArticle = ArticleModal.updateArticle(req.params.articleId, req.body);
    return res.status(200).send({
        status: 200,
        message: 'Succesfully edited article',
        data: {
            title: newArticle.title,
            article: newArticle.article
        }
    });
};