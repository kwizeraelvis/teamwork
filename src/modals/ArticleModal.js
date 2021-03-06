import uuidv4 from 'uuidv4';
import lodash from 'lodash';

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
            createdOn: Date.now(),
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
        return {}
    }
    updateArticle(id, data){
        const article = this.findArticle(id);
        const index = this.articles.indexOf(article);
        this.articles[index].title = data['title'] || article.title;
        this.articles[index].article = data['article'] || article.article;
        this.articles[index].modifiedOn = Date.now()
        return this.articles[index]
    }
}

export default new ArticleModal;