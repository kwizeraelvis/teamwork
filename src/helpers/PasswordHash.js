import bcrypt from 'bcrypt';

class PasswordHash {
    static async HashPassword(Password){
        try {
            return await bcrypt.hash(Password,10);
        } catch (e) {
            console.log(e)
        }
    }

}
export default PasswordHash;
