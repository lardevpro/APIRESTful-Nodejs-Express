# Diferencias entre npm Registry y npm CLI

## 📌 npm Registry
El **npm Registry** es una base de datos en línea donde se almacenan paquetes de JavaScript y Node.js. Es el lugar donde los desarrolladores publican, descargan y gestionan dependencias.

🔹 **Características:**
- Almacena miles de paquetes reutilizables.
- Permite la publicación y gestión de librerías.
- Disponible en [https://registry.npmjs.org/](https://registry.npmjs.org/).
- Puede configurarse para usar registros privados.

🔹 **Ejemplo de consulta al registro:**
```sh
npm view express
```

---

## 📌 npm CLI
La **npm CLI (Command Line Interface)** es la herramienta de línea de comandos que permite interactuar con npm y su registro. Se usa para instalar paquetes, ejecutar scripts y administrar dependencias.

🔹 **Características:**
- Permite instalar y actualizar paquetes.
- Ejecuta scripts definidos en `package.json`.
- Administra versiones de dependencias.

🔹 **Ejemplo de uso en la terminal:**
```sh
npm install express     # Instala Express
npm update             # Actualiza dependencias
npm publish            # Publica un paquete en el registro
```

---

## 🔥 Diferencias clave
| Característica  | npm Registry | npm CLI |
|---------------|-------------|---------|
| ¿Qué es? | Un almacén en línea de paquetes | Una herramienta de línea de comandos |
| Función principal | Guardar y distribuir paquetes | Instalar, actualizar y administrar paquetes |
| URL de acceso | `https://registry.npmjs.org/` | Se usa en la terminal |
| Ejemplo de uso | `npm view paquete` | `npm install paquete` |

Ambos trabajan juntos para facilitar la gestión de dependencias en proyectos Node.js. 🚀

