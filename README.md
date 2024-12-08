# Platto

**Platto** es una API de backend diseñada para gestionar las operaciones diarias de un restaurante. A través de esta solución, se pueden administrar aspectos clave del restaurante, tales como los trabajadores, las mesas, los productos, las categorías de productos y las comandas. 

El sistema está orientado a mejorar la eficiencia operativa, permitiendo que el personal del restaurante interactúe con los datos de manera fácil y segura. Cada trabajador tiene un rol con permisos específicos, asegurando que las funciones del sistema estén bien delimitadas según el puesto. Además, todas las comandas cerradas se almacenan en un histórico, lo que facilita el control de ventas y el análisis de la actividad del restaurante.


## Características Principales

- **Gestión de Trabajadores**: Permite la creación, modificación y eliminación de trabajadores con roles específicos. 
  - **Admin**: Acceso total a la API, incluyendo la creación de usuarios y la visualización del historial de comandas.
  - **Camarero**: Acceso a los endpoints de consulta (GET) y capacidad para gestionar las comandas (crear, actualizar, eliminar) y las mesas (asignar, actualizar, eliminar).
  - **Cocinero**: Acceso a los endpoints de consulta (GET) y capacidad para gestionar productos y categorías de productos (crear, actualizar, eliminar).
  
- **Gestión de Mesas**: Los camareros pueden gestionar las mesas del restaurante (asignar mesas a clientes, actualizar su estado, eliminarlas).

- **Gestión de Productos y Categorías**: Los cocineros pueden gestionar los productos del menú y sus categorías (crear, actualizar, eliminar).

- **Gestión de Comandas**: Los camareros pueden crear nuevas comandas, asignarlas a las mesas y actualizar su estado. Las comandas cerradas, es decir, las que han sido pagadas por los clientes, se almacenan en un **histórico** para un posterior análisis y control de ventas.

- **Histórico de Comandas**: Una vez que una comanda se cierra, se guarda en un histórico utilizando **MongoDB**, lo que permite tener un registro detallado de las ventas y las comandas cerradas.

- **Autenticación Segura con JWT**: Para acceder a la API, los usuarios deben autenticarse mediante un sistema de login que proporciona un token **JWT**. Este token desbloquea los permisos necesarios para interactuar con los diferentes endpoints de la API.

- **Seguridad de Contraseñas**: Las contraseñas de los usuarios están protegidas mediante **bcrypt**, un algoritmo de hashing que asegura que las credenciales no se almacenen en texto plano, manteniendo así la seguridad del sistema.

---

## Tecnologías Utilizadas

- **Node.js** y **Express.js** para el backend y la creación de rutas.
- **MySQL** y **Sequelize** para gestionar la base de datos relacional.
- **MongoDB** y **Mongoose** para gestionar el historial de comandas.
- **JWT** para la autenticación y **bcryptjs** para el hashing de contraseñas.
- **Swagger** para la documentación interactiva de la API.
- **Docker** para la creación de contenedores y facilitar la configuración y despliegue del entorno de desarrollo y producción.

---

## Instalación

1. Clona este repositorio:
    ```bash
    git clone https://github.com/samucopp/Platto
    ```
2. Crear archivo '.env':

    Utilizando el '.env.example' crea el archivo '.env' y añade las variables de entorno

    ```plaintext
    DB_HOST=mysql_container
    DB_PORT=3308
    APP_HOST=Platto_back
    APP_PORT=3001

    DB_DIALECT=mysql

    DB_USER=user
    DB_PASSWORD=contraseñasegura
    DB_DATABASE=Platto_database

    SESSION_SECRET=secreto_para_session

    JWT_SECRET=secreto_para_jwt

    MONGO_HOST=mongo_container
    MONGO_USER=user
    MONGO_PASSWORD=contraseñasegura
    MONGO_DATABASE=mongo_database
    MONGO_PORT=27018
    ```

3. Inicia el contenedor de docker:

    Entra en la carpeta del proyecto y usa este comando para crear el contenedor

    ```bash
    docker compose up --build
    ```

4. Accede a la API a traves de Postman:
    
    - http://localhost:3001/api

---

## Uso de la API

### Autenticación

1. **Login**: Para acceder a los endpoints de la API, primero debes autenticarte con un usuario registrado. Se te proporcionará un token JWT que deberás usar para hacer peticiones.

    Endpoint de login:
    - `POST /api/login`

    Respuesta de ejemplo:

    ```json
    {
      "token": "tu_token_jwt_aqui"
    }
    ```

    Para interactuar con los demás endpoints, incluye el token en el header de la solicitud:

    ```bash
    Authorization: Bearer tu_token_jwt_aqui
    ```

---

## Endpoints Principales

### Comandas

- `GET /command/`: Obtiene todas las comandas. *(Requiere autenticación)*
- `GET /command/complete`: Obtiene todas las comandas completas. *(Requiere autenticación)*
- `GET /command/history`: Obtiene el historial de comandas cerradas. *(Requiere autenticación)*
- `GET /command/history/:id`: Obtiene el historial de una comanda cerrada específica. *(Requiere rol Admin)*
- `GET /command/:id`: Obtiene una comanda específica. *(Requiere autenticación)*
- `GET /command/:id/details`: Obtiene los detalles de una comanda específica. *(Requiere autenticación)*
- `POST /command/`: Crea una nueva comanda. *(Requiere rol Admin o Camarero)*
- `POST /command/:id/add-product`: Añade un producto a una comanda existente. *(Requiere rol Admin o Camarero)*
- `PUT /command/:id`: Actualiza los datos de una comanda. *(Requiere rol Admin o Camarero)*
- `PUT /command/:id/update-product`: Actualiza un producto en una comanda. *(Requiere rol Admin o Camarero)*
- `PUT /command/:id/close`: Cierra una comanda (marcando que el cliente ha pagado). *(Requiere rol Admin o Camarero)*
- `DELETE /command/:id`: Elimina una comanda. *(Requiere rol Admin o Camarero)*
- `DELETE /command/:id/remove-product`: Elimina un producto de una comanda. *(Requiere rol Admin o Camarero)*

### Categorías de Productos

- `GET /product-category/`: Obtiene todas las categorías de productos. *(Requiere autenticación)*
- `GET /product-category/:id`: Obtiene una categoría de producto específica. *(Requiere autenticación)*
- `POST /product-category/`: Crea una nueva categoría de productos. *(Requiere rol Admin o Cocinero)*
- `PUT /product-category/:id`: Actualiza una categoría de producto. *(Requiere rol Admin o Cocinero)*
- `DELETE /product-category/:id`: Elimina una categoría de producto. *(Requiere rol Admin o Cocinero)*

### Productos

- `GET /product/`: Obtiene todos los productos. *(Requiere autenticación)*
- `GET /product/:id`: Obtiene un producto específico. *(Requiere autenticación)*
- `POST /product/`: Crea un nuevo producto. *(Requiere rol Admin o Cocinero)*
- `PUT /product/:id`: Actualiza un producto. *(Requiere rol Admin o Cocinero)*
- `DELETE /product/:id`: Elimina un producto. *(Requiere rol Admin o Cocinero)*

### Mesas

- `GET /table/`: Obtiene todas las mesas. *(Requiere autenticación)*
- `GET /table/:id`: Obtiene una mesa específica. *(Requiere autenticación)*
- `POST /table/`: Crea una nueva mesa. *(Requiere rol Admin o Camarero)*
- `PUT /table/:id`: Actualiza una mesa. *(Requiere rol Admin o Camarero)*
- `DELETE /table/:id`: Elimina una mesa. *(Requiere rol Admin o Camarero)*

### Usuarios

- `GET /user/`: Obtiene todos los usuarios. *(Requiere autenticación)*
- `GET /user/:id`: Obtiene un usuario específico. *(Requiere autenticación)*
- `POST /user/`: Crea un nuevo usuario. *(Requiere rol Admin)*
- `PUT /user/:id`: Actualiza los datos de un usuario. *(Requiere rol Admin)*
- `DELETE /user/:id`: Elimina un usuario. *(Requiere rol Admin)*

### Autenticación

- `POST /login`: Permite a un usuario iniciar sesión y obtener un token JWT.

---

## 📖 Documentación de la API:

La API está documentada utilizando Swagger. Puedes acceder a la documentación interactiva en:

    http://localhost:3001/api-docs

---

## Contribuir

Si deseas contribuir a Platto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu característica o corrección (`git checkout -b mi-nueva-caracteristica`).
3. Realiza tus cambios y haz un commit (`git commit -am 'Añadí una nueva característica'`).
4. Sube tus cambios a tu repositorio forked (`git push origin mi-nueva-caracteristica`).
5. Crea un Pull Request desde tu repositorio hacia el repositorio original.