import ArticleModal from '../modals/ArticleModal';


export const viewUserArticles = (req, res) => {
    const UserArticles = ArticleModal.showAllforUser(req.user.email);
        return res.status(200).send({
            status: 200,
            message: 'Succesfully fetched all articles for the user',
            Articles : UserArticles,
        })
}