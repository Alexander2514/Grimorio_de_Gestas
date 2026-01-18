# ⚔️ Aethelgard Decrets - Medieval Task Manager

**Aethelgard Decrets** es una aplicación de gestión de tareas (TODOs) ambientada en un reino de fantasía medieval. El proyecto transforma la productividad diaria en una serie de gestas heroicas inscritas en pergaminos antiguos.

## 📜 Finalidad y Estilo
La finalidad de este proyecto es ofrecer una experiencia de usuario inmersiva. A diferencia de las listas de tareas convencionales, aquí el usuario "sella decretos" y "cumple gestas".
* **Estética:** Diseño basado en pergaminos desgastados, tipografía medieval y elementos de forja.
* **Detalles Únicos:** Incluye una barra de desplazamiento personalizada en forma de **Espada de Acero** y efectos de sonido de sellado real al completar misiones.

## 🛠️ Aspectos Técnicos y Construcción
El proyecto fue construido siguiendo principios de modularidad y persistencia de datos:

* **Custom Hooks:** Implementación de `useLocalStorage` para garantizar que las gestas persistan tras cerrar el navegador.
* **Portales de React:** Uso de `ReactDOM.createPortal` para el manejo de Modales, permitiendo que el formulario de "Nueva Gesta" flote sobre el reino.
* **Lógica de Toggle:** Sistema reversible para marcar/desmarcar tareas, permitiendo revocar decretos erróneos con feedback visual inmediato.
* **Animaciones y Sonido:** Integración de `Framer Motion` para transiciones suaves y una arquitectura de sonidos medievales personalizados.

## 🚀 Tecnologías Utilizadas
* **React.js:** Biblioteca principal para la construcción de interfaces.
* **JavaScript (ES6+):** Lógica funcional y manipulación de arreglos.
* **CSS3 Avanzado:** Uso de variables, animaciones `@keyframes` y personalización de `::-webkit-scrollbar`.
* **React Icons:** Específicamente la librería `GiQuill` para representar la pluma del escriba.
* **Local Storage API:** Para el almacenamiento local de datos del usuario.