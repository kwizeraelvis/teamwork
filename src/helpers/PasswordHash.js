import bcrypt from 'bcrypt';

class PasswordHash {
    static async HashPassword(Password){
        try {
        const HashedPassword = await bcrypt.hash(Password,10);
        return HashedPassword;
        } catch (e) {
            return e
        }
    }
    static async CompareHashPassword(Password, HashedPassword){
        try{
            const match = await bcrypt.compare(Password, HashedPassword);
            return match;
        }catch(e){
                return e
        }
    }
}
export default PasswordHash;
