function selectDayOrNight(datetime) {
    const hora = datetime.getHours();
    if (hora >= 8 && hora < 18) {
        return "comida";
    } else if ((hora >= 19 && hora <= 23) || hora === 0) {
        return "cena";
    }
};

function calculateProductSubtotal(products) {
    return products.map(product => {
        const quantity = product.Command_details.quantity;
        const price = product.price;
        const discount = product.Command_details.discount;

        const productSubtotal = quantity * price * (1 - discount / 100);
        
        return {
            ...product.get({plain: true}),
            subtotal: productSubtotal
        };
    });
};

function calculateTotalSubtotal(products, discount) {
    return products.reduce((total, product) => total + product.subtotal, 0) * (1 - discount / 100);
};

function cleanData(data) {
    const productWithSubtotal = calculateProductSubtotal(data.Products);
    const totalSubtotal = calculateTotalSubtotal(productWithSubtotal, data.discount);
    return {
        command_id: data.command_id,
        date: data.date,
        time: data.time,
        status: data.status,
        pax: data.pax,
        table_id: data.table_id,
        user_id: data.User.user_id,
        user_name: data.User.user_name,
        notes: data.notes,
        discount: data.discount,
        total: totalSubtotal,
        Products: productWithSubtotal.map(product => ({
            category_id: product.category_id,
            category_name: product.Product_category.name,
            product_id: product.product_id,
            name: product.name_short,
            notes: product.Command_details.notes,
            discount: product.Command_details.discount,
            price: product.price,
            quantity: product.Command_details.quantity,
            subtotal: product.subtotal
        }))
    };
};

export const functions = {
    selectDayOrNight,
    cleanData
}

export default functions;