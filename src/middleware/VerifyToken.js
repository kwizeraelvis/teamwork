import {} from 'dotenv/config';
import jwt from 'jsonwebtoken';
import UserModal from '../modals/UserModal';

class VerifyToken {
    static verifyAuthToken(req, res, next){
        try{
        const AuthToken = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(AuthToken, process.env.JWT_SECRET);
        const user = UserModal.findOne(decoded.email);
        if(!user){return res.status(404).send({status: 404, error: 'User doesnot exist'})};
        req.token = AuthToken;
        req.user = user
        next();
    } catch(error){
        return res.status(401).send({error: 'Please Authenticate'});
    }
    }
}

export default VerifyToken;