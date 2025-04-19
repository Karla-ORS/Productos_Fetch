const URLMain = "https://fakestoreapi.com/products/";
const mainProds = document.getElementById("mainProds");
const ulMenu = document.getElementById("ulMenu");

// Función para obtener productos (todos o por categoría)
function getData(cat = "") {
    const url = cat ? `${URLMain}category/${cat}` : URLMain;

    fetch(url, { method: "GET" })
        .then((response) => response.json())
        .then((res) => {
            mainProds.innerHTML = ""; // Limpia antes de mostrar
            createCards(res);
        })
        .catch((err) => {
            mainProds.insertAdjacentHTML("beforeend",
                `<div class="alert alert-danger" role="alert">
                    ${err.message}
                </div>`);
        });
}

// Función para cargar las categorías en el dropdown
function getCategories() {
    fetch(`${URLMain}categories/`)
        .then((response) => response.json())
        .then((res) => {
            console.log("categories: ", res);
            res.forEach(cat => {
                ulMenu.insertAdjacentHTML("beforeend", `
                    <li><a class="dropdown-item" style="cursor:pointer;" onclick="getData('${cat}')">${cat}</a></li>
                `);
            });
        })
        .catch((err) => {
            mainProds.insertAdjacentHTML("beforeend",
                `<div class="alert alert-danger" role="alert">
                    ${err.message}
                </div>`);
        });
}

// Función para crear las tarjetas de producto
function createCards(prods) {
    prods.forEach(prod => {
        const card = `
        <div class="card m-3" style="width: 18rem;">
            <img src="${prod.image}" class="card-img-top" alt="${prod.title}" style="height: 200px; object-fit: contain;">
            <div class="card-body">
                <span class="badge bg-secondary mb-2">${prod.category}</span>
                <h5 class="card-title">${prod.title}</h5>
                <p class="card-text">$${prod.price}</p>
                <a href="#" class="btn btn-primary" onclick="mostrarModal('${prod.title.replace(/'/g, "\\'")}', '${prod.description.replace(/'/g, "\\'")}', '${prod.image}', '${prod.price}')">Ver más</a>
            </div>
        </div>`;
        mainProds.insertAdjacentHTML("beforeend", card);
    });
}

// Modal para mostrar detalles del producto
function mostrarModal(titulo, descripcion, imagen, precio) {
    document.getElementById("modalProductoLabel").textContent = titulo;
    document.getElementById("modalDesc").textContent = descripcion;
    document.getElementById("modalImg").src = imagen;
    document.getElementById("modalPrecio").textContent = `$${precio}`;

    const modal = new bootstrap.Modal(document.getElementById('modalProducto'));
    modal.show();
}

// Inicialización
getData();       // Cargar productos
getCategories(); // Cargar categorías

