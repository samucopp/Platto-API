
# Changelog

## [1.0.0] - 2024-12-08

### Añadidos

-   **Integración de Swagger y CORS**: Instalación y configuración de Swagger para documentación de la API y CORS para habilitar solicitudes desde diferentes orígenes.  
-   **Autenticación**: Implementación de controladores de autenticación y uso de `jsonwebtoken` para la gestión de tokens.  
-   **Gestión de Comandas**: Creación de controladores y rutas para gestionar el histórico de comandas, así como la lógica para calcular el subtotal de cada producto y de la comanda.  
-   **Modelos y Base de Datos**: Definición del modelo para el histórico de comandas en Mongoose, conexión establecida con MongoDB, y creación de varios modelos.  
-   **Errores Personalizados**: Definición y creación de varios errores personalizados para un manejo más eficiente de excepciones en la API.  

### Mejoras

-   **Controladores Optimización**: Ajustes en los controladores para mejorar el rendimiento y la funcionalidad, con la adición de más errores personalizados y un manejo de excepciones más robusto.
-   **Estructura de la Base de Datos**: Actualización del esquema de la base de datos, optimizando su estructura para un mejor rendimiento de las consultas.

### Otros Cambios

-   **Dockerización**: Preparación del proyecto para su despliegue mediante Docker, lo que facilita la configuración y la portabilidad del entorno de desarrollo.
-   **Middlewares**: Creación e implementación de middlewares en las rutas para mejorar la seguridad y la validación de las solicitudes.
-   **Documentación**: Generación de un archivo `swagger.json` que proporciona documentación de la API para facilitar su uso por otros desarrolladores.

---

## [0.1.0] - 2024-12-04

### Añadidos

-   **Rutas y Controladores de Productos**: Implementación de rutas y controladores para gestionar los productos dentro de las comandas.
-   **CRUD Básico de Comandas**: Desarrollo de un CRUD básico para el manejo de comandas, con funcionalidades de creación, lectura, actualización y eliminación.

### Mejoras

-   **Base de Datos**: Actualización de la base de datos para incorporar los nuevos modelos y optimizar las relaciones entre las entidades.

---

## [0.0.5] - 2024-11-30

### Añadidos

-   **Controladores y Rutas de Usuario**: Creación de las rutas y controladores necesarios para gestionar usuarios en el sistema.
-   **Base de Datos Actualizada**: Implementación de cambios adicionales en la base de datos para soportar nuevas funcionalidades de usuario.

---

## [0.0.4] - 2024-11-28

### Añadidos

-   **Modelos de Mesas y Categorías de Menú**: Implementación de los controladores y rutas para gestionar mesas y las categorías de menú en el sistema.
-   **Controladores de Menú**: Creación de controladores y rutas para gestionar el menú del restaurante.

---

## [0.0.3] - 2024-11-26

### Mejoras

-   **Estructura del Proyecto**: Revisión de la estructura de la base de datos y algunos modelos para garantizar su compatibilidad con los cambios futuros.
-   **Conexión con la Base de Datos**: Establecimiento de la conexión con la base de datos de MongoDB y ajustes en los modelos de datos.

---

## [0.0.2] - 2024-11-24

### Añadidos

-   **Inicialización del Proyecto**: Configuración inicial de dependencias y estructura del proyecto.
-   **Dependencias Instaladas**: Instalación de las dependencias necesarias para la API, incluyendo `mongoose` y otros módulos de soporte.

---

## [0.0.1] - 2024-11-22

### Añadidos

-   **Inicio del Proyecto**: Creación inicial del repositorio y configuración básica del entorno de desarrollo.

---
