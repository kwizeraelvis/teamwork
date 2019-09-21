import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
class Auth {
    static generateUserAuthToken(user) {
        try {
            return jwt.sign({
                id: user.user_id,
                email: user.email,
                isAdmin: user.isAdmin
            }, process.env.JWT_SECRET);
        } catch (e) {
            console.log(e)
        }
    }
}
export default Auth;
