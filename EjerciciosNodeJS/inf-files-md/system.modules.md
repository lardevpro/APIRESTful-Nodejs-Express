# Sistema de Módulos en Node.js

Node.js utiliza un sistema de módulos que permite dividir el código en partes reutilizables. Existen tres tipos principales de módulos:

## 1. **Módulos Nativos**
Son módulos integrados en Node.js. Algunos ejemplos comunes son:
- `http`, `fs`, `path`, `crypto`
  
Estos módulos proporcionan funcionalidades básicas como la creación de servidores web, la manipulación de archivos y la realización de operaciones criptográficas.

## 2. **Módulos Locales**
Son módulos que tú mismo creas en tu proyecto. Se exportan con `module.exports` y se requieren con `require()`.

Estos módulos permiten organizar el código de forma modular y reutilizable dentro de tu aplicación.

## 3. **Módulos Externos**
Son módulos que instalas desde npm, como `express`, `axios`, y otros. Puedes usarlos para agregar funcionalidades adicionales a tu proyecto sin tener que escribir todo desde cero.

Para utilizar estos módulos, simplemente los instalas con `npm install` y los importas en tu proyecto.

## 4. **Módulos ES6 (Import/Export)**
A partir de Node.js 12, se soporta la sintaxis de módulos ES6 con `import/export`. Para usar esta sintaxis, debes indicar `"type": "module"` en el archivo `package.json`.

Esto permite escribir código más limpio y fácil de entender utilizando la misma sintaxis que en los navegadores modernos.

## Conclusión

El sistema de módulos de Node.js es esencial para organizar y reutilizar código en proyectos grandes. Puedes usar módulos nativos, crear tus propios módulos o aprovechar la gran cantidad de módulos externos disponibles en npm.