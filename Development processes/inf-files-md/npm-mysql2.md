# ¿Qué es `npm mysql2`?

`mysql2` es un paquete para Node.js que proporciona una solución eficiente y fácil de usar para interactuar con bases de datos MySQL y MariaDB. Es una de las bibliotecas más populares para trabajar con bases de datos en el entorno de JavaScript/Node.js. La biblioteca ofrece tanto una API de bajo nivel, como una API compatible con la popular biblioteca `mysql` para Node.js.

## Características principales de `mysql2`:

- **Soporte completo de MySQL**: `mysql2` es completamente compatible con las versiones de MySQL 5.5 y superiores, y con MariaDB.
  
- **Mejor rendimiento**: En comparación con el paquete `mysql` estándar, `mysql2` está optimizado para un mejor rendimiento, tanto en la ejecución de consultas como en el manejo de conexiones.

- **Soporte de Promesas**: La biblioteca tiene soporte integrado para Promesas, lo que facilita el trabajo con operaciones asíncronas en Node.js sin necesidad de usar callbacks. También es compatible con `async/await` para un código más limpio y fácil de mantener.

- **Soporte para Prepared Statements**: `mysql2` proporciona soporte nativo para declaraciones preparadas, lo que ayuda a proteger contra inyecciones SQL y mejora la eficiencia de las consultas repetitivas.

- **API compatible con `mysql`**: `mysql2` es compatible con la API del paquete `mysql` de Node.js, lo que facilita la transición entre las dos bibliotecas.

## Instalación

Para instalar `mysql2` en tu proyecto Node.js, puedes usar el siguiente comando:

```bash
npm install mysql2