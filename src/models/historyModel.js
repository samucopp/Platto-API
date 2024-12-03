import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    category_id: { type: Number, required: true },
    category_name: { type: String, required: true },
    product_id: { type: Number, required: true },
    name: { type: String, required: true },
    notes: { type: String, default: null },
    discount: { type: Number, default: 0 },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    subtotal: { type: Number, required: true },
});

const historySchema = new mongoose.Schema({
    command_id: { type: Number, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    status: { type: String, required: true },
    pax: { type: Number, required: true },
    table_id: { type: Number, required: true },
    user_id: { type: Number, required: true },
    user_name: { type: String, required: true },
    discount: { type: Number, default: 0 },
    total: { type: Number, required: true },
    Products: { type: [productSchema], required: true },
});

const History = mongoose.model('History', historySchema);

export default History;