const main = document.getElementsByTagName ("main").item(0)
const URLMain = "https://fakestoreapi.com/products/";

function getData(){
    const options = {"method" : "GET"}
    fetch(URLMain, options)
    .then((response) => {
        console.log(response);
        response.json().then((res)=>{
            //console.log(res.lenght); //20
            //console.log(res[0].title);
            createCards(res);
        });
    })
    .catch((err)=>{
        main.insertAdjacentHTML ("beforeend",
            `<div class = "alert alert-danger" role="alert">
            ${err.message}
            </div>`);
    })

}//getData
 
getData();


function createCards(prods){
    prods.array.forEach (prod => {
        const card = `<div class="card m-3" style="width: 18rem;">
            <img src="${prod.image}" class="card-img-top" alt="${prod.title}" style="height: 200px; object-fit: contain;">
            <div class="card-body">
                <h5 class="card-title">${prod.title}</h5>
                <p class="card-text">$${prod.price}</p>
                <p class="card-text">${prod.description.substring(0, 100)}...</p>
                <a href="#" class="btn btn-primary">Comprar</a>
            </div>`;
main.insertAdjacentHTML("beforeend",card);

    });



} //createCards

function createCards(prods) {
    prods.forEach(prod => {
        const card = `
        <div class="card m-3" style="width: 18rem;">
            <img src="${prod.image}" class="card-img-top" alt="${prod.title}" style="height: 200px; object-fit: contain;">
            <div class="card-body">
                <h5 class="card-title">${prod.title}</h5>
                <p class="card-text">$${prod.price}</p>
                <a href="#" class="btn btn-primary" onclick="mostrarModal('${prod.title.replace(/'/g, "\\'")}', '${prod.description.replace(/'/g, "\\'")}', '${prod.image}', '${prod.price}')">Ver más</a>
            </div>
        </div>
        `;
        main.insertAdjacentHTML("beforeend", card);
    });
}

function mostrarModal(titulo, descripcion, imagen, precio) {
    document.getElementById("modalProductoLabel").textContent = titulo;
    document.getElementById("modalDesc").textContent = descripcion;
    document.getElementById("modalImg").src = imagen;
    document.getElementById("modalPrecio").textContent = `$${precio}`;

    const modal = new bootstrap.Modal(document.getElementById('modalProducto'));
    modal.show();
}
