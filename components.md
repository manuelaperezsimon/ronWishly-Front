COMPONENTES

APP

- Recibe: token del usuario
- Muestra:
  - Full application + name app
- Estado: logueado o no logueado
- Acción: Setea o Guarda en local storage el token. ????

LOGIN:

- Recibe: si es Form Login
- Muestra: un formulario con campos userName y Password, con un botón y su texto. Y
  un link para ir a Form Register
- Estado: actualizará los datos que va introduciendo el usuario.
- Acción: al clickar el usuario, enviar el formulario y los datos del usuario pasan al store.

REGISTER:

- Recibe: si es Form Register
- Muestra: un formulario con campos userName, Password, Repeat password y un botón con su texto. Y un link para ir a Form Login
- Estado propio: ir actualizando los datos del usuario.
- Acción: al clickar se envía la info formulario de registro

LISTA DE WISHES

- Recibe: el array con los wishes????
- Muestra:
- título
- Botón de crear (si no hay elementos) sino:
- Filtro
- Muestra tantas cards de wishes como reciba.
- Botón de crear
- Paginación con el nº por página
- Estado: variable según el número de wishes que haya
- Acción del usuario: clicar filtro, clicar paginación o clicar create

WISH CARD

- Recibe por props: la info deL WISH
- Muestra:
- foto con texto alternativo
- muestra un título

- Estado: nada
- Acción del usuario: al clicar la card lo lleva a card al detalle

FORM LA CARD DE DETALLE
Si es modificar:

- Recibe: info del wish y qué tipo de formulario es
- Muestra: formulario con inputs llenos
- título
- añadir foto
- limit date
- editar descripción
- Botón modificar
- Estado: nada
- Acción: submit

  Si es de crear:

- Recibe: qué tipo de formulario es
- Muestra: formulario con inputs vacíos
- título
- añadir foto
- limit date
- editar descripción
- Botón de crear
- Estado: nada
- Acción: submit

BOTÓN

- Recibe: un texto y la acción a realizar (props)
- Muestra: un botón con el texto recibido
- Estado: nada
- Acción del usuario: invoca acción a realizar al ser clickado

WISH CARD DETALLE

- Recibe por props: la info deL WISH
- Muestra:
- foto con texto alternativo
- muestra un título
- fecha límite
- descripción
- Botón de modificar
- Botón de eliminar

- Estado: nada
- Acción del usuario: al clicar botón modificar lo lleva al form y al clicar botón eliminar realiza la acción

MODALES

- Recibe: su tipo y texto.
- Estado:
  Loading in process.
  Loading successful.
  Loading failed.
- Muestra: un texto con un icono.
- Acciones del usuario: Ninguna.

PAGINACIÓN

- Recibe: El número de página que se está mostrando.
- Estado: Ninguno.
- Muestra: El número de página recibido y dos botones con su texto (previous - next)
- Acciones del usuario: Cuando el usuario clickea los botones, uno lo lleva a la página anterior y otro a la posterior.

LOGOUT

- Recibe: acción a realizar
- Estado: nada.
- Muestra: icono de logout
- Acciones del usuario: cuando el usuario clica lo lleva a la página de login.

Datos: Array de objetos wishes
Modificaciones:

- cargar todos los wishes
- Crear wish
- Modificar wish
- Eliminar wish
