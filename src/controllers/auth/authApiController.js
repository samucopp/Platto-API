import authController from "./authController.js";
import jwt from "../../config/jwt.js";

async function login(req, res) {
    try {
        const { user_name, password } = req.body;
        const user = await authController.login(user_name, password);
        const token = jwt.sign({user_id:user.user_id,role:user.role});
        res.json({token});
    } catch (error) {
        console.error(error);
        if (error.status) {
            res.status(error.status);
        } else {
            res.status(500);
        }
        res.json({ error: error.message });
    }

}

export const functions = {
    login
}

export default functions;