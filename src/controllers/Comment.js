import lodash from 'lodash';
import CommentModal from '../modals/CommentModal'


class CommentController{
    static createComment(req, res){
    try{
        const comment = lodash.pick(req.body,['comment']);
        comment.CreatedBy = req.user.email;
        const articleId = req.params.articleId;
        const saveComment = CommentModal.saveComment(articleId, comment);
        return res.status(201).send({
            status: 201,
            message: "Comment succesfully posted",
            data:{
                createdon: saveComment.Createdon,
                createdby: saveComment.CreatedBy,
                articleTitle: saveComment.article.title,
                article: saveComment.article.article,
                comment: saveComment.comment
            }
        });
    }catch(error){
        return res.status(404).send({status: 404, message: error});
    }
    }
}

export default CommentController;