import ArticleModal from '../modals/ArticleModal';


export const viewUserArticles = (req, res) => {
    const UserArticles = ArticleModal.showAllforUser(req.user.email);
    if(UserArticles){
        return res.status(200).send({
            status: 200,
            message: 'Succesfully fetched all articles for the user',
            Articles : UserArticles,
        })
    } else {
        return res.status(404).send({status: 404, error: 'User has no articles'});
    }
}