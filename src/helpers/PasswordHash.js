import bcrypt from 'bcrypt';

class PasswordHash {
    static async HashPassword(Password){
        try {
            return await bcrypt.hash(Password,10);
        } catch (e) {
            console.log(e)
        }
    }
    static async CompareHashPassword(Password, HashedPassword){
        try{
            return await bcrypt.compare(Password, HashedPassword);
        }catch(e){
                console.log(e);
        }
    }
}
export default PasswordHash;
