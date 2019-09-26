import ArticleModal from '../modals/ArticleModal';


export const ShowAllArticles = (req, res) => {
    try{
        const Articles = ArticleModal.showAll();
        return res.status(200).send({
            status: 200,
            message: 'Available Articles',
            Articles: Articles
        })
    }catch(e){
        return res.send(404).send({status:404, error: e});
    }
}
