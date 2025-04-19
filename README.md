# Productos_Fetch
Productos usando Fetch 


Esta actividad fue realizada como práctica para consumir una API, crear tarjetas de productos dinámicamente y mostrar detalles mediante un modal con Bootstrap.

Utilicé JavaScript para obtener los datos desde la API FakeStoreAPI, y luego mostré esa información en forma de tarjetas `(cards)`.

### Se utiliza el método `fetch()` para hacer una solicitud GET a la API pública Fake Store API. Esta API proporciona información de productos como título, precio, imagen, descripción y categoría.

`createCards()`
Esta función recibe un arreglo de productos y genera tarjetas (cards) dinámicamente en el DOM utilizando `insertAdjacentHTML() `. 
Cada tarjeta contiene:
* Imagen del producto
* Título
* Precio
* Botón que abre un modal con más información 
* Categorias

Se utiliza `forEach()` para recorrer todos los productos de forma sencilla y eficiente.

### Para acceder y modificar el contenido de la página, se utilizan métodos como:

`getElementById()` – para insertar datos en el modal.

``getElementsByTagName("main").item(0)` – para insertar las tarjetas dentro del contenedor principal.

`insertAdjacentHTML("beforeend")` – para añadir tarjetas al final del contenedor sin eliminar el contenido anterior.

### Cuando el usuario hace clic en “Ver más”, se ejecuta `mostrarModal()`, una función que:

* Inserta dinámicamente el contenido en el modal  `(innerText / src)`

* Usa la clase de Bootstrap Modal para mostrar la ventana emergente

* Se muestra la descripción completa, imagen, precio del producto seleccionado.

>Vista previa del index.html

![Index](https://raw.githubusercontent.com/Karla-ORS/Productos_Fetch/refs/heads/main/Imagen/Captura%20de%20pantalla%202025-04-18%20235328.png)
