import 'jest-extended';
import PasswordHash from '../helpers/PasswordHash';
import Auth from '../helpers/Auth';
import uuidv4 from 'uuidv4';
import faker from 'faker';

describe('Utilities tests', () => {
it('Should generate auth token for user', () => {
    const user = {
        id: uuidv4(),
        email: faker.internet.email(),
        isAdmin: false
    };
    const response = Auth.generateUserAuthToken(user);
    expect(response).toBeString()
});

it('Should has user password',async () => {
    const userPassword = '123@Hello123';
    const response = await PasswordHash.HashPassword(userPassword);
    expect(response).toBeString();
});

it('Should be able to compare to password', async () => {
    const HashedPassword = await PasswordHash.HashPassword('123@Hello123');
    const NormalPassword = '123@Hello123';
    const response = await PasswordHash.CompareHashPassword(NormalPassword, HashedPassword);
    expect(response).toBe(true);
});

it('Should throw error if password is not a string', async() => {
    const HashedPassword = await PasswordHash.HashPassword(1);
    const errormessage = new Error('data must be a string and salt must either be a salt string or a number of rounds')
    expect(HashedPassword).toEqual(errormessage);
});

it('Should throw error if compare hash password parameters are not strings', async() => {
    const response = await PasswordHash.CompareHashPassword(1,1);
    const errorMsg = new Error('data and hash must be strings');
    expect(response).toEqual(errorMsg);
});
});