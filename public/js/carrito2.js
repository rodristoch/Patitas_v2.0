let numeroCarrito = document.querySelector(".numerito-carrito")
let numeroCarritoMobile = document.querySelector(".numerito-carrito-mobile")
let contenedor = document.querySelector(".contenedor-producto")  /* el div donde se muestran los productos agregados al carrito */
let contenedorSubtotal = document.querySelector(".subtotal")  /* el texto del subtotal a pagar */
let contenedorTotal = document.querySelector(".total")  /* el texto del total a pagar */


function vaciarCarrito() {

    localStorage.removeItem("carrito")
    numeroCarrito.innerText = productosEnElCarrito()
    numeroCarritoMobile.innerText = productosEnElCarrito()
    contenedor.innerHTML = "No hay productos en el carrito"
    contenedorSubtotal.innerText = "$ 0"
    contenedorTotal.innerText = "$ 0"

}

function calcularTotal(products) {
    return contenedorTotal.innerText = "$ " + products.reduce((acum, product) => {return acum += product.precio}, 0)
}

function calcularSubtotal(products) {
    return contenedorSubtotal.innerText = "$ " + products.reduce((acum, product) => {return acum += product.precio}, 0)
}


let products = []  /* aca pusheo los prod agregados al carrito */


if(localStorage.carrito) {
    let carrito = JSON.parse(localStorage.carrito)
    console.log(carrito)
    carrito.forEach(index => {
        fetch(`/api/productos/${index.id}`)
        .then(res => res.json())
        .then(productos => {  

            if(carrito.length < 2){

                contenedor.innerHTML +=  

                "<div class=" + "contenedor1" + ">" +
                    "<div class=" + "contenedor-img" + ">" +
                        "<img src=" + `http://localhost:3100/img/productos/${productos.data.imagen}` + " class=" + "imagen" + ">" +
                    "</div>" +
                    "<div class=" + "texto" + ">" +
                        "<div class=" + "titulo-cantidad" + ">" +
                            "<h2 class=" + "titulo-nombre-producto" + ">" + productos.data.nombre + 
                        "</div>" +
                        
                            "<p class=" + "descripcion2" + ">" + productos.data.descripcion + "</p>" +
                        
                        "<div class=" + "div-botones" + ">" +
                            "<button" + " class=" + "boton-eliminar" + " onclick=" + "removeItem()" +">" + "Eliminar" + "</button>" + 
                            "<button class=" + "botton-comprar" + ">" + "Comprar ahora" + "</button>" +
                        "</div>" +
                        (productos.data.descuentos[0].id == 2 ?
                        "<div class=" + "arriba" + ">" +
                            "<p class=" + "precio-normal2" + ">" + "Precio regular:" + "</p>" +
                            "<p class=" + "precio-tachado-detalle" + ">" + "$" + productos.data.precio + "</p>" +
                        "</div>" +
                        "<div class=" + "abajo" + ">" +
                            "<p class=" + "precio-oferta" + ">" + "Precio en oferta!!" + "</p>" +
                            "<p class=" + "precio-detalle" + ">" + "$" + Number((productos.data.precio*0.8).toFixed(2)) + "</p>" +
                            "<p class=" + "descuento-precio" + ">" + "20% OFF" + "</p>" +
                        "</div>" :
                        "<div class=" + "precio-regular" + ">" +
                            "<p class=" + "precio-normal" + ">" + "Precio:" + "</p>" +
                            "<p class=" + "precio-detalle" + ">" + "$" + productos.data.precio + "</p>" +
                        "</div>" +
                    "</div>") +
                "</div>";

                /* pusheo los productos al array */
                products.push(
                    {nombre: productos.data.nombre,
                    descripcion: productos.data.descripcion,
                    color: productos.data.color,
                    precio: Number(productos.data.precio),
                    imagen: productos.data.imagen,
                    tipo_mascota_id: productos.data.tipo_mascota_id,
                    marca_id: productos.data.marca_id,
                    descuentos: productos.data.descuentos[0]
                })

                
            } else {

                contenedor.innerHTML +=  

                "<div class=" + "contenedorMasDeUno" + ">" +
                    "<div class=" + "contenedor-img" + ">" +
                        "<img src=" + `http://localhost:3100/img/productos/${productos.data.imagen}` + " class=" + "imagen" + ">" +
                    "</div>" +
                    "<div class=" + "texto" + ">" +
                        "<div class=" + "titulo-cantidad" + ">" +
                            "<h2 class=" + "titulo-nombre-producto" + ">" + productos.data.nombre + 
                        "</div>" +
                        
                            "<p class=" + "descripcion2" + ">" + productos.data.descripcion + "</p>" +
                        
                        "<div class=" + "div-botones" + ">" +
                            "<button" + " class=" + "boton-eliminar" + " onclick=" + "removeItem()" +">" + "Eliminar" + "</button>" + 
                            "<button class=" + "botton-comprar" + ">" + "Comprar ahora" + "</button>" +
                        "</div>" +
                        (productos.data.descuentos[0].id == 2 ?
                        "<div class=" + "arriba" + ">" +
                            "<p class=" + "precio-normal2" + ">" + "Precio regular:" + "</p>" +
                            "<p class=" + "precio-tachado-detalle" + ">" + "$" + productos.data.precio + "</p>" +
                        "</div>" +
                        "<div class=" + "abajo" + ">" +
                            "<p class=" + "precio-oferta" + ">" + "Precio en oferta!!" + "</p>" +
                            "<p class=" + "precio-detalle" + ">" + "$" + Number((productos.data.precio*0.8).toFixed(2)) + "</p>" +
                            "<p class=" + "descuento-precio" + ">" + "20% OFF" + "</p>" +
                        "</div>" :
                        "<div class=" + "precio-regular" + ">" +
                            "<p class=" + "precio-normal" + ">" + "Precio:" + "</p>" +
                            "<p class=" + "precio-detalle" + ">" + "$" + productos.data.precio + "</p>" +
                        "</div>" +
                    "</div>") +
                "</div>";

                /* pusheo los productos al array */
                products.push(
                    {nombre: productos.data.nombre,
                    descripcion: productos.data.descripcion,
                    color: productos.data.color,
                    precio: Number(productos.data.precio),
                    imagen: productos.data.imagen,
                    tipo_mascota_id: productos.data.tipo_mascota_id,
                    marca_id: productos.data.marca_id,
                    descuentos: productos.data.descuentos[0]
                })


            }

            
        })

        .then(() => {

            console.log(products)
            document.querySelector(".subtotal").innerText = "$ " + products.reduce((acum, product) => {return acum += product.precio}, 0)
            document.querySelector(".total").innerText = "$ " + products.reduce((acum, product) => {return acum += product.precio}, 0)
            
        })

    });

    /* contenedorSubtotal.innerText = "$" + subtotal
    contenedorTotal.innerText = contenedorSubtotal */

} else {  /* si no hay productos en el carrito */

    contenedor.innerHTML = "No hay productos en el carrito"
    contenedorSubtotal.innerText = "$ 0"
    contenedorTotal.innerText = "$ 0"
}







