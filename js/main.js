const URLMain = "https://fakestoreapi.com/products/";
const mainProds = document.getElementById("mainProds");
const ulMenu = document.getElementById("ulMenu");

// Función para obtener productos
function getData(cat = "") {
    const url = cat ? `${URLMain}category/${cat}` : URLMain;

    fetch(url, { method: "GET" })
        .then((response) => response.json())
        .then((res) => {
            mainProds.innerHTML = ""; // Limpiar contenido anterior
            createCards(res);
        })
        .catch((err) => {
            mainProds.insertAdjacentHTML("beforeend",
                `<div class="alert alert-danger" role="alert">${err.message}</div>`);
        });
}

// Función para crear las tarjetas
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

// Función para mostrar el modal
function mostrarModal(titulo, descripcion, imagen, precio) {
    document.getElementById("modalProductoLabel").textContent = titulo;
    document.getElementById("modalDesc").textContent = descripcion;
    document.getElementById("modalImg").src = imagen;
    document.getElementById("modalPrecio").textContent = `$${precio}`;

    const modal = new bootstrap.Modal(document.getElementById('modalProducto'));
    modal.show();
}

// Cargar productos iniciales
getData();

// Opcional: si tienes un menú dinámico
// Puedes agregar esto si no lo tienes aún
fetch(`${URLMain}categories`)
    .then(res => res.json())
    .then(cats => {
        cats.forEach(cat => {
            ulMenu.insertAdjacentHTML("beforeend", `
                <li><a class="dropdown-item" onclick="getData('${cat}')">${cat}</a></li>
            `);
        });
    });
