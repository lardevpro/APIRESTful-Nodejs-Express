# Modelo Vista Controlador (MVC)

El **Modelo Vista Controlador (MVC)** es un patrón arquitectónico ampliamente utilizado en el desarrollo de aplicaciones para separar la lógica de negocio, la interfaz de usuario y el control de la aplicación.

## 1. **Definición del MVC**

El patrón **MVC** divide una aplicación en tres componentes interconectados:

- **Modelo (Model):** Representa la lógica de negocio y los datos de la aplicación. El modelo se encarga de recuperar, almacenar y manipular los datos, y también de notificar a la vista cuando los datos cambian.
- **Vista (View):** Representa la interfaz de usuario (UI). La vista se encarga de mostrar los datos proporcionados por el modelo y actualizar la interfaz cuando el modelo cambia.
- **Controlador (Controller):** Actúa como un intermediario entre el modelo y la vista. Recibe las entradas del usuario, las procesa y actualiza el modelo o la vista según sea necesario.

### Características
- **Desacoplamiento:** La separación de responsabilidades facilita el mantenimiento y la escalabilidad del sistema.
- **Reutilización:** Cada componente (modelo, vista, controlador) puede modificarse independientemente sin afectar a los demás.
- **Facilita el testing:** Al separar la lógica de la vista y la interacción del usuario, es más fácil realizar pruebas unitarias de la lógica de negocio.

---

## 2. **Flujo de Trabajo en MVC**

1. El **usuario** interactúa con la **vista** (por ejemplo, hace clic en un botón).
2. La **vista** envía la acción al **controlador**.
3. El **controlador** procesa la acción, puede actualizar el **modelo** con nuevos datos.
4. El **modelo** actualiza su estado y notifica a la **vista** de los cambios.
5. La **vista** se actualiza con la nueva información del **modelo**.

---

## 3. **Componentes del MVC**

- **Modelo (Model):** 
  - Encapsula los datos y la lógica de negocio.
  - Puede acceder a bases de datos o realizar cálculos.
  - No tiene conocimiento directo de la vista ni del controlador.

- **Vista (View):** 
  - Muestra los datos al usuario.
  - Está relacionada con la interfaz de usuario.
  - Escucha los cambios del modelo para actualizar la UI.

- **Controlador (Controller):**
  - Actúa como intermediario entre el modelo y la vista.
  - Maneja la entrada del usuario y actualiza el modelo o la vista en consecuencia.
  - Puede dirigir el flujo de la aplicación según las interacciones del usuario.

---

## 4. **Ventajas del Patrón MVC**

- **Separa las preocupaciones:** Facilita la gestión de código, ya que la lógica de negocio, la UI y el control de flujo están separados.
- **Facilita el mantenimiento:** Los cambios en la vista no afectan al modelo y viceversa, lo que permite modificaciones sin impactar otras partes del sistema.
- **Escalabilidad:** Facilita la incorporación de nuevas funcionalidades sin afectar demasiado el sistema existente.
- **Pruebas más fáciles:** El modelo se puede probar de manera independiente de la vista y el controlador, facilitando las pruebas unitarias.

---

## 5. **Desventajas del Patrón MVC**

- **Complejidad inicial:** Al principio, la implementación de MVC puede ser más compleja en comparación con aplicaciones más simples.
- **Desacoplamiento excesivo:** En algunos casos, el desacoplamiento puede hacer que la implementación sea innecesariamente complicada si no se necesita tanta flexibilidad.

---

## 6. **Uso del MVC**

El patrón MVC es común en:
- **Aplicaciones web:** Frameworks como **Angular**, **React** (con su patrón de arquitectura de componentes), **Spring MVC**, **Ruby on Rails**, y **ASP.NET MVC** implementan variantes del patrón MVC.
- **Aplicaciones de escritorio:** Aplicaciones que requieren una separación clara entre la interfaz de usuario y la lógica de negocio.
- **Aplicaciones móviles:** Muchos marcos móviles siguen principios MVC, como **iOS** con su patrón **UIViewController**.

