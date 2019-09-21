import  request from 'supertest';
import app from '../app';

test('should Signup a new User', (done) => {
    const response = request(app).post('/auth/signup').send({
    firstName:'Kwizera',
    lastName:'Aime Elvis',
    email:'elvis@gmail.com',
    gender:'male',
    jobRole:'Product Manager',
    department:'Product Design',
    address:'kigali',
    isAdmin:true,
    password:'Anj1G@de'
    }).expect(200).end(done);
})

test('Should not signup user with incorrect info', (done) => {
    const response = request(app).post('/auth/signup').send({
        firstName:1522,
        lastName:'Aime Elvis',
        email:'elvis@gmail.com',
        gender:'male',
        jobRole:'Product Manager',
        department:'Product Design',
        address:'kigali',
        isAdmin:true,
        password: 1234
}).expect(422).end(done);
})
