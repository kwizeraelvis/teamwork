import lodash from 'lodash';
import UserModal from '../modals/UserModal';
import Auth from '../helpers/Auth';

export const SignupUser =async(req, res) => {
    try {
        const user = lodash.pick(req.body,['firstName','lastName','email','password','gender','jobRole','department','address','isAdmin']);
        const saveUser = await UserModal.save(user);
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
        return res.status(409).send({status: 409, message: e});
    }
}
