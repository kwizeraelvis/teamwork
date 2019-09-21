import 'jest-extended';
import PasswordHash from '../helpers/PasswordHash';
import Auth from '../helpers/Auth';
import uuidv4 from 'uuidv4';
import faker from 'faker';

test('Should generate auth token for user', () => {
    const user = {
        id: uuidv4(),
        email: faker.internet.email(),
        isAdmin: false
    };
    const response = Auth.generateUserAuthToken(user);
    expect(response).toBeString()
});

test('Should has user password',async () => {
    const userPassword = '123@Hello123';
    const response = await PasswordHash.HashPassword(userPassword);
    expect(response).toBeString();
})