# Códigos de Estado HTTP

Los códigos de estado HTTP son una parte fundamental de la comunicación entre el cliente y el servidor. Estos códigos indican si la solicitud fue exitosa, si hubo un error y la naturaleza de ese error.

## 1xx: Informativo
Estos códigos indican que la solicitud fue recibida y que el proceso continúa.

- **100 Continue**: El servidor ha recibido los encabezados de la solicitud y el cliente debe continuar enviando el cuerpo de la solicitud.
- **101 Switching Protocols**: El servidor está cambiando los protocolos según lo solicitado por el cliente.
- **102 Processing**: El servidor ha recibido la solicitud, pero aún la está procesando (usado principalmente en WebDAV).

## 2xx: Éxito
Estos códigos indican que la solicitud fue recibida, entendida y aceptada correctamente.

- **200 OK**: La solicitud fue exitosa.
- **201 Created**: La solicitud fue exitosa y se ha creado un nuevo recurso.
- **202 Accepted**: La solicitud ha sido aceptada para su procesamiento, pero no se ha completado aún.
- **203 Non-Authoritative Information**: El servidor ha procesado la solicitud correctamente, pero está proporcionando información que no proviene de su propia base de datos.
- **204 No Content**: La solicitud fue exitosa, pero no hay contenido que devolver.
- **205 Reset Content**: La solicitud fue exitosa y el cliente debe reiniciar la vista.
- **206 Partial Content**: El servidor está enviando solo una parte del recurso solicitado, generalmente cuando se usa para la descarga de archivos.

## 3xx: Redirección
Estos códigos indican que el cliente debe tomar más acciones para completar la solicitud.

- **300 Multiple Choices**: Hay varias opciones para el recurso solicitado.
- **301 Moved Permanently**: El recurso solicitado ha sido movido de forma permanente a una nueva URL.
- **302 Found**: El recurso solicitado ha sido temporalmente movido a una nueva URL.
- **303 See Other**: El cliente debe usar una nueva URL para obtener el recurso solicitado.
- **304 Not Modified**: El recurso no ha sido modificado desde la última solicitud.
- **305 Use Proxy**: El recurso solicitado debe ser accedido a través de un proxy.
- **306 (Unused)**: Código no utilizado.
- **307 Temporary Redirect**: El recurso solicitado ha sido temporalmente movido a una nueva URL.
- **308 Permanent Redirect**: El recurso solicitado ha sido movido permanentemente a una nueva URL.

## 4xx: Errores del Cliente
Estos códigos indican que la solicitud contenía errores y no pudo ser procesada correctamente.

- **400 Bad Request**: La solicitud es incorrecta o mal formada.
- **401 Unauthorized**: El cliente no está autorizado para acceder al recurso.
- **402 Payment Required**: Este código está reservado para futuros fines, como el pago por contenido.
- **403 Forbidden**: El servidor entiende la solicitud, pero se niega a autorizarla.
- **404 Not Found**: El recurso solicitado no fue encontrado en el servidor.
- **405 Method Not Allowed**: El método HTTP utilizado no está permitido para el recurso solicitado.
- **406 Not Acceptable**: El recurso solicitado no puede ser entregado de acuerdo con los encabezados de aceptación del cliente.
- **407 Proxy Authentication Required**: Se requiere autenticación de proxy para acceder al recurso.
- **408 Request Timeout**: La solicitud del cliente ha tardado demasiado tiempo en llegar.
- **409 Conflict**: La solicitud no pudo ser procesada debido a un conflicto con el estado actual del servidor.
- **410 Gone**: El recurso solicitado ya no está disponible y no se espera que regrese.
- **411 Length Required**: El servidor requiere que se especifique el encabezado `Content-Length`.
- **412 Precondition Failed**: Una de las condiciones previas de la solicitud ha fallado.
- **413 Payload Too Large**: El cuerpo de la solicitud es demasiado grande para ser procesado por el servidor.
- **414 URI Too Long**: La URI proporcionada es demasiado larga para que el servidor la procese.
- **415 Unsupported Media Type**: El tipo de medio de la solicitud no es compatible con el recurso.
- **416 Range Not Satisfiable**: El rango solicitado no puede ser cumplido.
- **417 Expectation Failed**: La expectativa en el encabezado `Expect` no se pudo cumplir.
- **418 I'm a teapot**: Un código de estado de broma definido en el protocolo de control de la "Cerveza HTTP" (RFC 2324).
- **421 Misdirected Request**: La solicitud fue dirigida a un servidor incorrecto.
- **422 Unprocessable Entity**: La solicitud es bien formada, pero el servidor no puede procesarla debido a errores semánticos (usado en WebDAV).
- **423 Locked**: El recurso solicitado está bloqueado (usado en WebDAV).
- **424 Failed Dependency**: La solicitud falló debido a una dependencia fallida (usado en WebDAV).
- **425 Too Early**: El servidor no está dispuesto a arriesgarse a procesar la solicitud, ya que puede ser redundante.
- **426 Upgrade Required**: El servidor requiere que el cliente actualice su protocolo.
- **428 Precondition Required**: El servidor requiere que el cliente envíe una condición previa.
- **429 Too Many Requests**: El cliente ha enviado demasiadas solicitudes en un corto período de tiempo.
- **431 Request Header Fields Too Large**: Los campos del encabezado de la solicitud son demasiado grandes.
- **451 Unavailable For Legal Reasons**: El recurso solicitado no está disponible debido a restricciones legales.

## 5xx: Errores del Servidor
Estos códigos indican que hubo un problema en el servidor al procesar la solicitud.

- **500 Internal Server Error**: El servidor encontró un error inesperado y no pudo completar la solicitud.
- **501 Not Implemented**: El servidor no reconoce el método solicitado.
- **502 Bad Gateway**: El servidor actuó como un gateway o proxy y recibió una respuesta inválida del servidor de origen.
- **503 Service Unavailable**: El servidor no está disponible temporalmente, generalmente por sobrecarga o mantenimiento.
- **504 Gateway Timeout**: El servidor actuó como un gateway o proxy y no recibió una respuesta a tiempo del servidor de origen.
- **505 HTTP Version Not Supported**: El servidor no soporta la versión de HTTP solicitada.
- **506 Variant Also Negotiates**: El servidor experimentó un error en la negociación de contenido.
- **507 Insufficient Storage**: El servidor no tiene suficiente espacio para completar la solicitud (usado en WebDAV).
- **508 Loop Detected**: El servidor detectó un bucle infinito durante el procesamiento de la solicitud (usado en WebDAV).
- **510 Not Extended**: La solicitud requiere una extensión que el servidor no soporta.
- **511 Network Authentication Required**: El cliente debe autenticarse para obtener acceso a la red.

---

Estos códigos de estado son utilizados para proporcionar información detallada sobre el estado de una solicitud HTTP. Cada código tiene un propósito específico para ayudar a identificar y solucionar problemas en el servidor o el cliente.
