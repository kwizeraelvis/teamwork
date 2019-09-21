import uuidv4 from 'uuidv4'

class UserModal {
    constructor(){
        this.user=[]
    }
    save(user){
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
            this.user.push(newUser);
            return newUser;
    };
    findOne(){

    }
}

export default new UserModal;
