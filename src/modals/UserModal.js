import uuidv4 from 'uuidv4';
import PasswordHash from '../helpers/PasswordHash';

class UserModal {
    constructor(){
        this.user=[]
    }
    async save(user){
        const newUser = {
            user_id: uuidv4(),
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            gender: user.gender,
            jobRole: user.jobRole,
            department: user.department,
            address: user.department,
            isAdmin: user.isAdmin
        };
            newUser.password = await PasswordHash.HashPassword(newUser.password);
            this.user.push(newUser);
            return newUser;
    };
    findOne(email){
        return this.user.find(user => user.email === email);
    }
}

export default new UserModal;
