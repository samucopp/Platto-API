import commandController from "../../controllers/command/commandController.js";


async function getAll(req, res) {
    try {
        const commands = await commandController.getAll();
        res.status(200).json(commands);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

async function getOne(req, res) {
    try {
        const id = parseInt(req.params.id);
        const command = await commandController.getById(id);
        if(!command) {
            return res.status(404).json({error:"Command not found"});
        }
        res.status(200).json(command);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

async function create(req, res) {
    try {
        const { table_id, user_id, date, time, status, pax, notes, discount } = req.body;
        const newCommand = await commandController.create(table_id, user_id, date, time, status, pax, notes, discount);
        res.status(201).json({command:newCommand});
    } catch (error) {
        console.log(error);
        if(error.status) {
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
        const { table_id, user_id, date, time, status, pax, notes, discount } = req.body;
        const updatedCommand = await commandController.update(id, table_id, user_id, date, time, status, pax, notes, discount);
        res.status(200).json({command:updatedCommand});
    } catch (error) {
        console.log(error);
        if(error.status) {
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
        const removedCommand = await commandController.remove(id);
        res.status(200).json({command:removedCommand});
    } catch (error) {
        console.log(error);
        if(error.status) {
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
    create,
    update,
    remove
}

export default functions;