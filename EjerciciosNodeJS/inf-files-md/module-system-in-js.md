# CommonJS y ESModules en Node.js

Node.js soporta dos sistemas de módulos: **CommonJS** (CJS) y **ESModules** (ESM).

## 1. **CommonJS (CJS)**

### Sintaxis
- **Importación:** `require()`
- **Exportación:** `module.exports` o `exports`

### Características
- Carga síncrona.
- Compatible con todas las versiones de Node.js.
- Usado ampliamente en el ecosistema de Node.

---

## 2. **ESModules (ESM)**

### Sintaxis
- **Importación:** `import`
- **Exportación:** `export`, `export default`

### Características
- Carga asíncrona.
- Ideal para proyectos modernos y con compatibilidad con navegadores.
- Requiere configuración con `"type": "module"` en `package.json`.

---

## 3. **Diferencias entre CommonJS y ESModules**

| Característica            | CommonJS (CJS)                         | ESModules (ESM)                   |
|---------------------------|----------------------------------------|-----------------------------------|
| Sintaxis de Importación   | `require()`                            | `import`                          |
| Sintaxis de Exportación   | `module.exports`, `exports`            | `export`, `export default`        |
| Carga                     | Síncrona                               | Asíncrona                         |
| Compatibilidad con Navegador | No                                   | Sí                                |

---

## Notas

- **Configuración ESM:** Para usar ESModules en Node.js, agrega `"type": "module"` en `package.json`.
- **Interoperabilidad:** No mezcles CommonJS y ESModules sin precauciones.

