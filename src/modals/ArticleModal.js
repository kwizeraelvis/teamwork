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
    showAllforUser(email){
        const userArticles = this.articles.filter(article => article.createdBy === email).sort((a,b) =>
         { return b.createdOn - a.createdOn });
        return userArticles;
    }
    findArticle(id){
        return this.articles.find(article => article.article_id === id)
    }
    deleteArticle(id){
        const article = this.findArticle(id);
        const index = this.articles.indexOf(article);
        this.articles.splice(index, 1);
        return {};
    }
}

export default new ArticleModal;