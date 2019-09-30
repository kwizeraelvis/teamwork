import 'jest-extended';
import request from 'supertest';
import uuidv4 from 'uuidv4';
import app from '../app';
import {setupDummyData, userOne, AuthToken1,AuthToken3, clearDummyData} from './fixtures/TestData';
import {SetupDummyDatabase,article1,article5,clearArticleData} from './fixtures/ArticleData';
import ArticleModal from '../modals/ArticleModal';

beforeAll(setupDummyData);
beforeAll(SetupDummyDatabase);


test('Should create a new article for a valid user ', async () => {
    await request(app).post('/articles')
        .set('Authorization', `Bearer ${AuthToken1}`)
        .send({
            title: 'Dummy title',
            content: 'This is dummy data generated by jest'
        }).expect(200);
});

test('Should not create article for invalid user', async () => {
    await request(app).post('/articles')
    .set('Authorization', `Bearer ${AuthToken3}`)
    .send({
        title: 'Dummy Title',
        content: 'Dummy content'
    }).expect(404)
});

test('Should not create task with no title', async () => {
    await request(app).post('/articles')
    .set('Authorization', `Bearer ${AuthToken3}`)
    .send({
        content: 'Dummy Content'
    }).expect(422)
});

test('Should not create task with no content/body', async () => {
    await request(app).post('/articles')
    .set('Authorization',`Bearer ${AuthToken1}`)
    .send({
        content:'Dummy Data'
    }).expect(422)
});

test('Should show all articles in a sorted manner', async () => {
    await request(app)
        .get('/feeds')
        .set('Authorization', `Bearer ${AuthToken1}`)
        .send()
        .expect(200)
});

test('Should not show articles if user is not logged in', async () => {
    await request(app)
        .get('/feeds')
        .send()
        .expect(401)
});

test('should return articles for the current user', async() => {
    await request(app)
        .get('/feed/me')
        .set('Authorization', `Bearer ${AuthToken1}`)
        .send()
        .expect(200)
});

test('should not return articles for unregistered user', async() => {
    await request(app)
        .get('/feed/me')
        .send()
        .expect(401)
});
test('should not show articles for user with no articles', async() => {
    await request(app)
        .get('/feed/me')
        .set('Authorization', `Bearer ${AuthToken3}`)
        .send()
        .expect(404)
});
test('Should not delete non existent article', async () => {
    await request(app)
        .delete(`/articles/${article5.article_id}`)
        .set('Authorization', `Bearer ${AuthToken1}`)
        .send()
        .expect(404)
});

test('Should delete an article', async () => {
    const myArticle = {
            title: 'This is manuall title',
            content: 'This is a manual body',
            createdBy: userOne.email,
    };
    const saveArticle = ArticleModal.saveArticle(myArticle);
    await request(app)
    .delete(`/articles/${saveArticle.article_id}`)
    .set('Authorization', `Bearer ${AuthToken1}`)
    .send()
    .expect(204)
});