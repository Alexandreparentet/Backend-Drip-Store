import bcrypt from "bcrypt";
            // parseInt
const SALTS = process.env.SALT_ROUNDS;

const cryptPassword = (password) => {
    return bcrypt.hashSync(password, 10) /*SALT-*/
}

export const validatePassword = (password, passwordHash) => {
    console.log("Entrei na função");  
    return bcrypt.compareSync(password, passwordHash);
}

export default cryptPassword;
