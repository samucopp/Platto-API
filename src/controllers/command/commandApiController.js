import commandController from "../../controllers/command/commandController.js";


async function getAll(req, res) {
    try {
        const commands = await commandController.getAll();
        res.status(200).json(commands);
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

async function getFullAll(req, res) {
    try {
        const commands = await commandController.getFullAll();
        res.status(200).json(commands);
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

async function getHistory(req, res) {
    try {
        const commands = await commandController.getHistory();
        res.status(200).json(commands);
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

async function getHistoryById(req, res) {
    try {
        const id = parseInt(req.params.id);
        const commands = await commandController.getHistoryById(id);
        res.status(200).json(commands);
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

async function getOne(req, res) {
    try {
        const id = parseInt(req.params.id);
        const command = await commandController.getById(id);
        res.status(200).json(command);
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

async function getFullOne(req, res) {
    try {
        const id = parseInt(req.params.id);
        const command = await commandController.getByIdFull(id, true);
        res.status(200).json(command);
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

async function getByTableIdFull(req, res) {
    try {
        const id = parseInt(req.params.id);
        const command = await commandController.getByTableIdFull(id, true);
        res.status(200).json(command);
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

async function create(req, res) {
    try {
        const { table_id, pax } = req.body;
        const user_id = req.user_id;
        const newCommand = await commandController.create(table_id, user_id, pax);
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
        const { date, table_id, user_id, pax, notes, discount } = req.body;
        const updatedCommand = await commandController.update(id, date, table_id, user_id, pax, notes, discount);
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

async function close (req, res) {
    try {
        const command_id = parseInt(req.params.id);
        const closedCommand = await commandController.closeCommand(command_id);
        res.status(200).json({command:closedCommand});
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

async function addProduct(req, res) {
    try {
        const command_id = parseInt(req.params.id);
        const { product_id, quantity } = req.body;
        const addedProduct = await commandController.addProduct(command_id, product_id, quantity);
        res.status(200).json({command:addedProduct});
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

async function updateProduct(req, res) {
    try {
        const command_id = parseInt(req.params.id);
        const { product_id, quantity } = req.body;
        const updatedProduct = await commandController.updateProduct(command_id, product_id, quantity);
        res.status(200).json({command:updatedProduct});
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

async function removeProduct(req, res) {
    try {
        const command_id = parseInt(req.params.id);
        const { product_id } = req.body;
        const removedProduct = await commandController.removeProduct(command_id, product_id);
        res.status(200).json({command:removedProduct});
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
    getFullAll,
    getHistory,
    getHistoryById,
    getOne,
    getFullOne,
    getByTableIdFull,
    create,
    update,
    remove,
    close,
    addProduct,
    updateProduct,
    removeProduct
}

export default functions;