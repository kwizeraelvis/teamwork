import ArticleModal from '../../modals/ArticleModal';
import uuidv4 from 'uuidv4';
import {userOne, userTwo, userThree} from './TestData';

export const article1 = {
    article_id: uuidv4(),
    title: 'Dummy title 1',
    content: 'Dummy data 1',
    createdBy: userOne.email,
    createdOn: Date.now()
};

export const article2 = {
    article_id: uuidv4(),
    title: 'Dummy title 2',
    content: 'Dummy data 2',
    createdBy: userOne.email,
    createdOn: Date.now()
};

export const article3 = {
    article_id: uuidv4(),
    title: 'Dummy title 3',
    content: 'Dummy data 3',
    createdBy: userOne.email,
    createdOn: Date.now()
};

export const article4 = {
    article_id: uuidv4(),
    title: 'Dummy title 4',
    content: 'Dummy data 4',
    createdBy: userTwo.email,
    createdOn: Date.now()
};

export const article5 = {
    article_id: uuidv4(),
    title: 'Dummy title 5',
    content: 'Dummy data 5',
    createdBy: userThree.email,
    createdOn: Date.now()
};


export const SetupDummyDatabase = () => {
    ArticleModal.saveArticle(article1);
    ArticleModal.saveArticle(article2);
    ArticleModal.saveArticle(article3);
    ArticleModal.saveArticle(article4);
    ArticleModal.saveArticle(article5);
}