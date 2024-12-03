import userController from "../user/userController.js";
import { verifyPassword } from "../../config/bcrypt.js";
import error from "../../helpers/errors.js";

async function login(user_name, password){
    const user = await userController.getByName(user_name);
    if(!user){
        throw new error.USER_NOT_FOUND();
    }
    const verified = await verifyPassword(password,user.password);
    if(!verified){
        throw new error.INVALID_CREDENTIALS();
    }
    return user;
}


export const functions = {
    login
}

export default functions;
