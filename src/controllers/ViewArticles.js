import ArticleModal from '../modals/ArticleModal';


export const ShowAllArticles = (req, res) => {
        const Articles = ArticleModal.showAll();
        return res.status(200).send({
            status: 200,
            message: 'Available Articles',
            Articles: Articles
        })
}
