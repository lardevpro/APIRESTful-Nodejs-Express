# Diagramas de Flujo de Sincronía y Asincronía en Node.js

## 1. Sincronía
En la ejecución síncrona, cada instrucción se ejecuta en orden y bloquea la siguiente hasta que termine.
```mermaid
flowchart TD;
    A[Inicio] --> B[Proceso]
    B --> C[Fin]
```

## 2. Asincronía Secuencial
Usando `async/await`, el código espera el resultado de una operación antes de continuar, pero sin bloquear completamente el hilo.
```mermaid
flowchart TD;
    A[Inicio] -->|Espera 2s| B[Proceso]
    B --> C[Fin]
```

## 3. Asincronía con Callback
Se ejecuta una función, y cuando termina su tarea, llama a otra función pasada como argumento.
```mermaid
flowchart TD;
    A[Inicio] -->|Llama función| B[Espera 2s]
    B --> C[Proceso]
    C --> D[Llamar Callback]
    D --> E[Fin]
```

## 4. Asincronía Paralela
Múltiples tareas se ejecutan al mismo tiempo sin depender unas de otras.
```mermaid
flowchart TD;
    A[Inicio] --> B[Fin]
    A -->|1s| C[Tarea 3]
    A -->|2s| D[Tarea 2]
    A -->|3s| E[Tarea 1]
```

