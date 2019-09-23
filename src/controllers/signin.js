import lodash from 'lodash';
import UserModal from '../modals/UserModal';
import PasswordHash from '../helpers/PasswordHash';
import Auth from '../helpers/Auth';

export const SigninUser = async (req, res) => {
    const data = lodash.pick(req.body,['email', 'password']);
    const user = UserModal.findOne(data.email);
    if(user.email !== data.email){return res.status(404).send({status: 404, error: "username/password might be wrong"});}
    const PasswordMatch =  await PasswordHash.CompareHashPassword(data.password, user.password);
    if(!PasswordMatch){return res.status(404).send({status:404, error:'username/password might be wrong'});}
    user.token = Auth.generateUserAuthToken(user);
    return res.status(200).send({
        status: 200,
        message: 'Login was succseful',
        AuthToken: user.token
    });
}