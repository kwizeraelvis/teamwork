import lodash from 'lodash';
import UserModal from '../modals/UserModal';
import PasswordHash from '../helpers/PasswordHash';
import Auth from '../helpers/Auth';

class User {
    static async signUp(req, res){
        try {
            const user = lodash.pick(req.body,['firstName','lastName','email','password','gender','jobRole','department','address','isAdmin']);
            user.password = await PasswordHash.HashPassword(user.password);
            const saveUser = UserModal.save(user);
            saveUser.token = Auth.generateUserAuthToken(saveUser);
            return res.status(200).send({
                status: 200,
                message: 'The user was created',
                User : {
                    UserEmail : saveUser.email,
                    AuthToken: saveUser.token
                }
            })
        } catch (e) {
            console.log(e)
        }
        }
    }

export default User;