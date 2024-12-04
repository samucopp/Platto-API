class USER_NOT_FOUND extends Error {
    constructor() {
        super("Usuario no encontrado");
        this.status = 404;
    }
}

class COMMAND_NOT_FOUND extends Error {
    constructor() {
        super("Comanda no encontrada");
        this.status = 404;
    }
}

class PASSWORD_NOT_MATCH extends Error {
    constructor() {
        super("Las contraseñas no coinciden");
        this.status = 400;
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

class TABLE_ALREADY_IN_USE extends Error {
    constructor() {
        super("La mesa ya está ocupada");
        this.status = 409;
    }
}

class INVALID_CREDENTIALS extends Error {
    constructor() {
        super("Credenciales inválidas");
        this.status = 401;
    }
}


export const errors = {
    USER_NOT_FOUND,
    COMMAND_NOT_FOUND,
    PASSWORD_NOT_MATCH,
    USER_ALREADY_EXISTS,
    USERNAME_ALREADY_EXISTS,
    INVALID_CREDENTIALS,
    TABLE_ALREADY_IN_USE
};

export default errors;