# Protocolo HTTP

## ¿Qué es HTTP?
HTTP (**Hypertext Transfer Protocol**) es un protocolo de comunicación que permite la transferencia de información en la web. Es la base del intercambio de datos entre clientes (navegadores) y servidores. Funciona sobre el modelo petición-respuesta, donde un cliente envía una solicitud al servidor y este responde con la información solicitada.

## Ejemplo de una petición HTTP
A continuación, se muestra un ejemplo de una solicitud HTTP GET y su correspondiente respuesta:

### **Solicitud HTTP (Request)**
```http
GET /index.html HTTP/1.1
Host: www.ejemplo.com
User-Agent: Mozilla/5.0
Accept: text/html
```

### **Respuesta HTTP (Response)**
```http
HTTP/1.1 200 OK
Content-Type: text/html

<html>
  <head><title>Ejemplo</title></head>
  <body>
    <h1>Hola, mundo!</h1>
  </body>
</html>
```

## Funcionamiento del protocolo HTTP

1. **El cliente realiza una solicitud HTTP** al servidor web, indicando el recurso que desea obtener.
2. **El servidor procesa la solicitud** y busca el recurso en su sistema.
3. **El servidor responde** con el recurso solicitado o con un código de estado HTTP si hay algún error.
4. **El cliente interpreta la respuesta** y muestra el contenido al usuario.

## Conclusión
HTTP es un protocolo esencial para la comunicación en la web, permitiendo la transferencia de datos entre clientes y servidores de manera rápida y estructurada.
