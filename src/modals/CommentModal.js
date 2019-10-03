import uuidv4 from 'uuidv4';
import ArticleModal from './ArticleModal'

class CommentModal {
    constructor(){
        this.comments = [];
    }
    saveComment(article_id, comment){
        const article = ArticleModal.findArticle(article_id);
        if(!article){
           throw'Specified Article does not exist';
        }
        const newComment={
            comment_id: uuidv4(),
            articleId: article_id,
            Createdon: Date.now(),
            comment: comment.comment,
            Createdby: comment.email
        }
        newComment.article = article;
        this.comments.push(newComment);
        return newComment;
}
}

export default new CommentModal;