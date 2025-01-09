import userController from "./userController.js";

async function getAll(req, res) {
    try {
        const users = await userController.getAll();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        if (error.status) {
            res.status(error.status);
        } else {
            res.status(500);
        }
        res.json({ error: error.message });
    }
};

async function getOne(req, res) {
    try {
        const id = parseInt(req.params.id);
        const user = await userController.getById(id);
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        if (error.status) {
            res.status(error.status);
        } else {
            res.status(500);
        }
        res.json({ error: error.message });
    }
};

async function getOneByName(req, res) {
    try {
        const { name } = req.params.user_name;
        const user = await userController.getByName(name);
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        if (error.status) {
            res.status(error.status);
        } else {
            res.status(500);
        }
        res.json({ error: error.message });
    }
};

async function create(req, res) {
    try {
        const { user_name, password, role } = req.body;
        const newUser = await userController.create(user_name, password, role);
        res.status(201).json({ user: newUser });
    } catch (error) {
        console.log(error);
        if (error.status) {
            res.status(error.status);
        } else {
            res.status(500);
        }
        res.json({ error: error.message });
    }
};

async function update(req, res) {
    try {
        const id = parseInt(req.params.id);
        const { user_name, password, role } = req.body;
        const updatedUser = await userController.update(id, user_name, password, role);
        res.status(200).json({ user: updatedUser });
    } catch (error) {
        console.log(error);
        if (error.status) {
            res.status(error.status);
        } else {
            res.status(500);
        }
        res.json({ error: error.message });
    }
};

async function remove(req, res) {
    try {
        const id = parseInt(req.params.id);
        const removedUser = await userController.remove(id);
        res.status(200).json({ user: removedUser });
    } catch (error) {
        console.log(error);
        if (error.status) {
            res.status(error.status);
        } else {
            res.status(500);
        }
        res.json({ error: error.message });
    }
};

export const functions = {
    getAll,
    getOne,
    getOneByName,
    create,
    update,
    remove
}

export default functions;