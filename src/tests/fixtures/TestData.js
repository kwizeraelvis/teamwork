import UserModal from '../../modals/UserModal';
import Auth from '../../helpers/Auth';
import uuidv4 from 'uuidv4';

export const userOne = {
    user_id: uuidv4(),
    firstName: 'User',
    lastName: 'One',
    email: 'userone@gmail.com',
    password: 'User1O@ne',
    gender: 'male',
    jobRole: 'product designer',
    department: 'product managment',
    address: 'kigali',
    isAdmin: false
};
export const userTwo = {
    user_id: uuidv4(),
    firstName: 'User',
    lastName: 'Two',
    email: 'usertwo@gmail.com',
    password: 'User2T@wo',
    gender: 'female',
    jobRole: 'System Architect',
    department: 'IT',
    address: 'kigali',
    isAdmin: true
};
export const userThree = {
    user_id: uuidv4(),
    firstName: 'User',
    lastName: 'Three',
    email: 'userthree@gmail.com',
    password: 'User3T@hre',
    gender: 'male',
    jobRole: 'Accounts officer',
    department: 'Finance',
    address: 'kigali',
    isAdmin: true
};

export const random = {
    email: 'random@gmail.com',
    password: 'Ran4D@omu',
}

export const AuthToken1 = Auth.generateUserAuthToken(userOne);
export const AuthToken2  = Auth.generateUserAuthToken(userTwo);
export const AuthToken3 = Auth.generateUserAuthToken(userThree);

export const setupDummyData = async () => {
    await UserModal.save(userOne);
    await UserModal.save(userTwo);
};
