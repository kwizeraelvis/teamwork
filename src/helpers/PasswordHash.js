import bcrypt from 'bcrypt';

class PasswordHash {
    static async HashPassword(Password){
        try {
        const HashedPassword = await bcrypt.hash(Password,10);
        return HashedPassword;
        } catch (e) {
            console.log(e)
        }
    }
    static async CompareHashPassword(Password, HashedPassword){
        try{
            const match = await bcrypt.compare(Password, HashedPassword);
            console.log(match);
            return match;
        }catch(e){
                console.log(e);
        }
    }
}
export default PasswordHash;
