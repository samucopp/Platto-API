import userModel from "../../models/userModel.js";
import error from "../../helpers/errors.js";
import { hashPassword } from "../../config/bcrypt.js";

async function getAll() {
    const users = await userModel.findAll();
    return users;
};

async function getById(id) {
    const user = await userModel.findByPk(id);
    return user;
};

async function getByName(user_name) {
    const user = await userModel.findOne({
        where: {
            user_name: user_name
        }
    });
    return user;
};

async function create(user_name, password, role) {
    const oldUser = await getByName(user_name);
    if (oldUser) {
        throw new error.USER_ALREADY_EXISTS();
    }
    const hash = await hashPassword(password);
    const newUser = await userModel.create({
        user_name,
        password: hash,
        role
    });
    return newUser;
};

async function update(id, user_name, password, role) {
    const user = await userModel.findByPk(id);
    if(!user) {
        throw new error.USER_NOT_FOUND();
    }
    user.user_name = user_name;
    user.role = role;
    if(password) {
        const hash = await hashPassword(password);
        user.password = hash;
    }
    await user.save();
    return user;
};

async function remove(id) {
    const userToRemove = await userModel.findByPk(id);
    if(!userToRemove) {
        throw new error.USER_NOT_FOUND();
    }
    await userToRemove.destroy();
    return userToRemove;
};

export const functions = {
    getAll,
    getById,
    getByName,
    create,
    update,
    remove
}

export default functions;