Documentación Proyecto Fullstack Módulo 4 Task Master

De acuerdo a los requerimientos designados en la documentación de la empresa Task Master, en donde el objetivo es crear una gestión de tareas; se desarrolló con el fin de que el usuario pueda (Crear, organizar, editar, actualizar, eliminar y filtrarlo por preferencia y estado).
La aplicación web, se desarrollo con un cliente Backend utilizando Node.js y Express, para el cliente Frontend se desarrollo con React versión 6.23.1 y Vite+ react como entorno web. La base de datos fue creada y almacenada en Mysql, sus datos fueron alojados en la nube a través del servidor console clever, un servidor gratuito que permite almacenar los datos de la base de datos con restricción de imágenes y si este no esta en uso el servidor lo apaga, tiene como desventaja que toca estar subiendo en el visual el servidor backend.
Instalación de comandos npm:

npm install -g react-devtools
Después de ejecutar este comando, puede acceder a React DevTools desde el panel de herramientas de desarrollador de su navegador.

npm install --save react-router-dom
devuelve una función que puede usar para navegar a una página diferente en su aplicación React.

npm install axios
Axios es una biblioteca de JavaScript popular que se utiliza para realizar solicitudes HTTP en Node.js y navegadores web.

npm install nodemailer
El módulo Nodemailer facilita el envío de correos electrónicos desde su computadora. Enlace: https://www.w3schools.com/nodejs/nodejs_email.asp.

npm install bootstrap
Permite a los desarrolladores gestionar fácilmente las dependencias del proyecto, compartir y reutilizar código y automatizar diversas tareas de desarrollo.

npm install sweetalert2
nos sirve para crear las mejores alertas y notificaciones para tus proyectos web en react.

npm install bcrypt
Es una biblioteca de cifrado de contraseñas que se utiliza para cifrar y verificar las contraseñas en aplicaciones web.

npm install --save-dev jest
Para realizar las pruebas unitarias en Javascript y Node js, realizadas para los controladores del backend.

Especificaciones del Proyecto:
El proyecto cumple con las siguientes especificaciones:

1. Autenticación de usuarios: Los usuarios podrán crear cuentas a través del botón registro, iniciar sesión y gestionar su perfil personal para editar y actualizar sus datos como (nombre, email y password). Haciendo uso de JWT para su autentificación y el cifrado de contraseñas.
2. Creación y gestión de tareas: Los usuarios podrán crear tareas, asignarles una descripción, fecha de vencimiento, prioridad (alta, media y baja) y estado (pendiente, en progreso, completada).
3. Los usuarios podrán visualizar sus tareas luego de agregarlas con los detalles anteriormente mencionados.
4. Pruebas unitarias: se realizo una prueba unitaria al backend a través de Jest para como compra el buen funcionamiento de la codificación.
5. Visualización de tareas: Se proporciono una interfaz intuitiva para que los usuarios vean sus tareas pendientes, tareas en progreso y tareas completadas, en la cual pueden editar, actualizar y eliminar cada una de las descripciones de la tarea.
6. Despliegue de la aplicación: Se desplego la aplicación en el servidor web Netifly permitiendo que este sea funcional en entorno real a su vez la base de datos fue creada y almacenada en Mysql, sus datos fueron alojados en la nube a través del servidor console clever, ambos servidor de forma gratuita para muestra de este Proyecto Integrador.
