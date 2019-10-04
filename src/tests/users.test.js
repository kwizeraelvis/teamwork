import 'jest-extended';
import  request from 'supertest';
import app from '../app';
import { userOne, userTwo, userThree, setupDummyData,clearDummyData} from './fixtures/TestData';

beforeAll(setupDummyData);

test('should Signup a new User',async () => {
    await request(app).post('/auth/signup').send({
    firstName:'Kwizera',
    lastName:'Aime Elvis',
    email:'elvis@gmail.com',
    gender:'male',
    jobRole:'Product Manager',
    department:'Product Design',
    address:'kigali',
    isAdmin:true,
    password:'Anj1G@de'
    }).expect(200);
});

test('Should not signup existing user', async() => {
    await request(app).post('/auth/signup').send({
        firstName:'Kwizera',
        lastName:'Aime Elvis',
        email:'elvis@gmail.com',
        gender:'male',
        jobRole:'Product Manager',
        department:'Product Design',
        address:'kigali',
        isAdmin:true,
        password:'Anj1G@de'
        }).expect(409);
})

test('Should not signup user with incorrect info',async() => {
    await request(app).post('/auth/signup').send({
        firstName:1522,
        lastName:'Aime Elvis',
        email:'elvis@gmail.com',
        gender:'male',
        jobRole:'Product Manager',
        department:'Product Design',
        address:'kigali',
        isAdmin:true,
        password: 1234
}).expect(400);
});

test('Should not signup user with missing info',async () => {
    await request(app).post('/auth/signup').send({
        firstName:1522,
        lastName:'Aime Elvis',
        email:'elvis@gmail.com',
        gender:'male',
        jobRole:'Product Manager'
}).expect(400);
});

test('Should signin user with valid info',async() => {
    await request(app).post('/auth/signin').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200);
});

it('Should not signin user with wrong user email/password',async () => {
    await request(app).post('/auth/signin').send({
        email: userOne.email,
        password: userThree.password,
    }).expect(404)
});

it('Should return an auth token for a correct user',async () => {
    const response = await request(app).post('/auth/signin').send({
        email: userTwo.email,
        password: userTwo.password
    })
    expect(response.body.AuthToken).toBeString();
});
test('should not signin a non existent user', async () => {
    await request(app)
        .post('/auth/signin')
        .send({email: userThree.email, password: userThree.password})
        .expect(404)
});

test('Should not signin user with missing email/password', async () => {
    await request(app).post('/auth/signin').send({
        email: userOne.email,
    }).expect(400)
})