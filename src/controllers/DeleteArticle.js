import ArticleModal from '../modals/ArticleModal';

export const DeleteanArticle = (req, res) => {
    const article = ArticleModal.findArticle(req.params.articleId)
    if(!article){return res.status(404).send({status: 404, message: 'Article not found'});}
    ArticleModal.deleteArticle(req.params.articleId);
    return res.status(200).send({status: 200, message: 'Article was succesfully deleted'})
}
