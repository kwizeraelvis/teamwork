import uuidv4 from 'uuidv4';
import moment from 'moment';

class ArticleModal {
    constructor() {
        this.articles=[];
    }
    saveArticle (article){
        const newArticle = {
            article_id: uuidv4(),
            title: article.title,
            article: article.content,
            createdBy: article.email,
            createdOn: Date.now()
        }
        this.articles.push(newArticle);
        return newArticle;
    }
    showAll(){
        const sortedArticles = this.articles.sort((a,b) => {
            return b.createdOn - a.createdOn
        });
        return sortedArticles;
    }
}

export default new ArticleModal;