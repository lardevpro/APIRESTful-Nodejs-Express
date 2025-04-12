# CORS Preflight

## ¿Qué es CORS?

**CORS (Cross-Origin Resource Sharing)** es un mecanismo de seguridad utilizado por los navegadores web para permitir o restringir solicitudes entre diferentes orígenes (dominios, puertos o protocolos). El objetivo de CORS es evitar que sitios web maliciosos realicen solicitudes no autorizadas a otro servidor (por ejemplo, un API) en nombre del usuario.

En términos simples, CORS se asegura de que un navegador solo permita a un sitio web realizar solicitudes a un servidor si el servidor lo permite explícitamente mediante el encabezado `Access-Control-Allow-Origin`.

## ¿Qué es una solicitud Preflight?

Una **solicitud preflight** (pre-vuelo) es un tipo especial de solicitud HTTP realizada por el navegador antes de enviar una solicitud de tipo **CORS**. El propósito de la solicitud preflight es verificar si el servidor acepta solicitudes de un origen diferente (es decir, el servidor está dispuesto a permitir el intercambio de recursos entre diferentes dominios).

La solicitud preflight se realiza utilizando el método HTTP **OPTIONS** y contiene encabezados que indican al servidor el tipo de solicitud que se va a hacer (por ejemplo, el método HTTP, los encabezados personalizados, etc.). El servidor debe responder con los encabezados CORS adecuados para permitir o rechazar la solicitud real.

### ¿Cuándo se realiza una solicitud Preflight?

La solicitud preflight se realiza automáticamente en los siguientes casos:

1. **Métodos HTTP no seguros:** Si la solicitud va a usar métodos HTTP que no son **seguros** (como `PUT`, `DELETE`, `PATCH`, etc.), el navegador realiza una solicitud preflight para confirmar si el servidor permite esos métodos desde otros orígenes.
   
2. **Encabezados personalizados:** Si la solicitud incluye encabezados personalizados (por ejemplo, `Authorization`, `X-Custom-Header`), también se realizará una solicitud preflight para verificar si el servidor acepta esos encabezados.

3. **Tipos de contenido no estándar:** Si la solicitud usa un tipo de contenido que no es estándar, como `application/json` o `application/xml`, el navegador también realizará una solicitud preflight.

### Ejemplo de una solicitud Preflight

Supongamos que un cliente está intentando realizar una solicitud `POST` con un encabezado personalizado `Authorization` a un servidor en otro dominio.

**Solicitud Preflight (OPTIONS):**

El navegador primero enviará una solicitud `OPTIONS` al servidor para verificar si la solicitud real es segura.

```http
OPTIONS /api/endpoint HTTP/1.1
Host: api.example.com
Origin: http://example-client.com
Access-Control-Request-Method: POST
Access-Control-Request-Headers: Authorization
