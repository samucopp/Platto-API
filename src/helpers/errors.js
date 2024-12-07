class USER_NOT_FOUND extends Error {
    constructor() {
        super("Usuario no encontrado");
        this.status = 404;
    }
}
class PRODUCT_NOT_FOUND extends Error {
    constructor() {
        super("Producto no encontrado");
        this.status = 404;
    }
}
class COMMAND_NOT_FOUND extends Error {
    constructor() {
        super("Comanda no encontrada");
        this.status = 404;
    }
}
class PRODUCT_CATEGORY_NOT_FOUND extends Error {
    constructor() {
        super("Categoria no encontrada");
        this.status = 404;
    }
}
class TABLE_NOT_FOUND extends Error {
    constructor() {
        super("Mesa no encontrada");
        this.status = 404;
    }
}
class USER_ALREADY_EXISTS extends Error {
    constructor() {
        super("El usuario ya existe");
        this.status = 409;
    }
}
class USERNAME_ALREADY_EXISTS extends Error {
    constructor() {
        super("El nombre de usuario ya está en uso");
        this.status = 409;
    }
}

class PRODUCT_ALREADY_EXISTS extends Error {
    constructor() {
        super("Ya existe un producto con ese nombre");
        this.status = 409;
    }
}

class PRODUCT_CATEGORY_ALREADY_EXISTS extends Error {
    constructor() {
        super("Ya existe una categoría con ese nombre");
        this.status = 409;
    }
}

class PRODUCT_CATEGORY_IN_USE extends Error {
    constructor() {
        super("No se puede eliminar la categoría porque hay productos asociados a ella");
        this.status = 409;
    }
}

class TABLE_ALREADY_IN_USE extends Error {
    constructor() {
        super("La mesa ya está ocupada");
        this.status = 409;
    }
}

class TABLE_IN_USE extends Error {
    constructor() {
        super("La mesa no se puede eliminar porque está ocupada");
        this.status = 400;
    }
}

class EXCEEDS_TABLE_CAPACITY extends Error {
    constructor() {
        super("La mesa no puede contener tantos comensales");
        this.status = 409;
    }
}


class USER_HAS_COMMAND extends Error {
    constructor() {
        super("No se puede eliminar el usuario porque tiene comandas en preparación");
        this.status = 409;
    }
}

class INVALID_CREDENTIALS extends Error {
    constructor() {
        super("Credenciales inválidas");
        this.status = 401;
    }
}

class INVALID_DATA extends Error {
    constructor() {
        super("Error en los datos proporcionados");
        this.status = 400;
    }
}


export const errors = {
    USER_NOT_FOUND,
    TABLE_NOT_FOUND,
    PRODUCT_NOT_FOUND,
    COMMAND_NOT_FOUND,
    PRODUCT_CATEGORY_NOT_FOUND,
    PRODUCT_CATEGORY_IN_USE,
    USER_ALREADY_EXISTS,
    USERNAME_ALREADY_EXISTS,
    USER_HAS_COMMAND,
    INVALID_CREDENTIALS,
    TABLE_ALREADY_IN_USE,
    TABLE_IN_USE,
    EXCEEDS_TABLE_CAPACITY,
    PRODUCT_ALREADY_EXISTS,
    PRODUCT_CATEGORY_ALREADY_EXISTS,
    INVALID_DATA
};

export default errors;