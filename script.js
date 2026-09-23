/* =====================================================
   NEON KICKS
   SISTEMA CRUD DE ZAPATOS
   PRECIOS EN QUETZALES
===================================================== */


/* =====================================================
   IMÁGENES REALES DE ZAPATOS
===================================================== */

const imagenes = [

    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",

    "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",

    "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",

    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80",

    "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80",

    "https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&w=800&q=80",

    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",

    "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?auto=format&fit=crop&w=800&q=80",

    "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=800&q=80",

    "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=800&q=80"

];


/* =====================================================
   PRODUCTOS
===================================================== */

let productos = [

    {
        id: 1,
        nombre: "Air Max 90",
        marca: "Nike",
        talla: "40",
        color: "Rojo / Blanco",
        precio: 899,
        cantidad: 12,
        imagen: imagenes[0]
    },

    {
        id: 2,
        nombre: "Air Force 1",
        marca: "Nike",
        talla: "39",
        color: "Blanco",
        precio: 999,
        cantidad: 8,
        imagen: imagenes[1]
    },

    {
        id: 3,
        nombre: "Superstar Classic",
        marca: "Adidas",
        talla: "41",
        color: "Blanco / Negro",
        precio: 799,
        cantidad: 15,
        imagen: imagenes[2]
    },

    {
        id: 4,
        nombre: "Ultraboost",
        marca: "Adidas",
        talla: "42",
        color: "Negro",
        precio: 1299,
        cantidad: 7,
        imagen: imagenes[3]
    },

    {
        id: 5,
        nombre: "Suede Classic",
        marca: "Puma",
        talla: "38",
        color: "Negro",
        precio: 749,
        cantidad: 10,
        imagen: imagenes[4]
    },

    {
        id: 6,
        nombre: "RS-X",
        marca: "Puma",
        talla: "40",
        color: "Multicolor",
        precio: 899,
        cantidad: 9,
        imagen: imagenes[5]
    },

    {
        id: 7,
        nombre: "574 Classic",
        marca: "New Balance",
        talla: "41",
        color: "Gris",
        precio: 949,
        cantidad: 11,
        imagen: imagenes[6]
    },

    {
        id: 8,
        nombre: "550 White",
        marca: "New Balance",
        talla: "42",
        color: "Blanco / Verde",
        precio: 1099,
        cantidad: 6,
        imagen: imagenes[7]
    },

    {
        id: 9,
        nombre: "Old Skool",
        marca: "Vans",
        talla: "39",
        color: "Negro / Blanco",
        precio: 699,
        cantidad: 14,
        imagen: imagenes[8]
    },

    {
        id: 10,
        nombre: "Chuck Taylor",
        marca: "Converse",
        talla: "40",
        color: "Negro",
        precio: 649,
        cantidad: 13,
        imagen: imagenes[9]
    },


    /* ================= PRODUCTOS 11 - 20 ================= */

    {
        id: 11,
        nombre: "Air Jordan 1",
        marca: "Nike",
        talla: "42",
        color: "Rojo / Negro",
        precio: 1499,
        cantidad: 5,
        imagen: imagenes[0]
    },

    {
        id: 12,
        nombre: "Dunk Low",
        marca: "Nike",
        talla: "41",
        color: "Azul / Blanco",
        precio: 1199,
        cantidad: 8,
        imagen: imagenes[1]
    },

    {
        id: 13,
        nombre: "Gazelle",
        marca: "Adidas",
        talla: "39",
        color: "Verde",
        precio: 849,
        cantidad: 9,
        imagen: imagenes[2]
    },

    {
        id: 14,
        nombre: "Forum Low",
        marca: "Adidas",
        talla: "40",
        color: "Blanco",
        precio: 899,
        cantidad: 10,
        imagen: imagenes[3]
    },

    {
        id: 15,
        nombre: "Clyde",
        marca: "Puma",
        talla: "41",
        color: "Blanco / Negro",
        precio: 799,
        cantidad: 7,
        imagen: imagenes[4]
    },

    {
        id: 16,
        nombre: "Future Rider",
        marca: "Puma",
        talla: "42",
        color: "Azul",
        precio: 849,
        cantidad: 6,
        imagen: imagenes[5]
    },

    {
        id: 17,
        nombre: "327",
        marca: "New Balance",
        talla: "40",
        color: "Beige",
        precio: 999,
        cantidad: 12,
        imagen: imagenes[6]
    },

    {
        id: 18,
        nombre: "2002R",
        marca: "New Balance",
        talla: "43",
        color: "Gris",
        precio: 1299,
        cantidad: 4,
        imagen: imagenes[7]
    },

    {
        id: 19,
        nombre: "Sk8-Hi",
        marca: "Vans",
        talla: "42",
        color: "Negro",
        precio: 749,
        cantidad: 10,
        imagen: imagenes[8]
    },

    {
        id: 20,
        nombre: "Run Star Hike",
        marca: "Converse",
        talla: "39",
        color: "Negro",
        precio: 899,
        cantidad: 8,
        imagen: imagenes[9]
    },


    /* ================= PRODUCTOS 21 - 30 ================= */

    {
        id: 21,
        nombre: "Blazer Mid",
        marca: "Nike",
        talla: "40",
        color: "Blanco",
        precio: 899,
        cantidad: 7,
        imagen: imagenes[0]
    },

    {
        id: 22,
        nombre: "Pegasus",
        marca: "Nike",
        talla: "41",
        color: "Negro / Verde",
        precio: 1099,
        cantidad: 8,
        imagen: imagenes[1]
    },

    {
        id: 23,
        nombre: "Stan Smith",
        marca: "Adidas",
        talla: "38",
        color: "Blanco / Verde",
        precio: 799,
        cantidad: 11,
        imagen: imagenes[2]
    },

    {
        id: 24,
        nombre: "NMD R1",
        marca: "Adidas",
        talla: "42",
        color: "Negro",
        precio: 1199,
        cantidad: 5,
        imagen: imagenes[3]
    },

    {
        id: 25,
        nombre: "Roma",
        marca: "Puma",
        talla: "39",
        color: "Blanco",
        precio: 699,
        cantidad: 13,
        imagen: imagenes[4]
    },

    {
        id: 26,
        nombre: "Mayze",
        marca: "Puma",
        talla: "40",
        color: "Blanco / Rosa",
        precio: 899,
        cantidad: 8,
        imagen: imagenes[5]
    },

    {
        id: 27,
        nombre: "996",
        marca: "New Balance",
        talla: "41",
        color: "Azul",
        precio: 999,
        cantidad: 6,
        imagen: imagenes[6]
    },

    {
        id: 28,
        nombre: "9060",
        marca: "New Balance",
        talla: "42",
        color: "Crema",
        precio: 1399,
        cantidad: 5,
        imagen: imagenes[7]
    },

    {
        id: 29,
        nombre: "Authentic",
        marca: "Vans",
        talla: "38",
        color: "Negro",
        precio: 599,
        cantidad: 15,
        imagen: imagenes[8]
    },

    {
        id: 30,
        nombre: "One Star",
        marca: "Converse",
        talla: "40",
        color: "Blanco",
        precio: 749,
        cantidad: 9,
        imagen: imagenes[9]
    },


    /* ================= PRODUCTOS 31 - 40 ================= */

    {
        id: 31,
        nombre: "Vomero 5",
        marca: "Nike",
        talla: "42",
        color: "Gris",
        precio: 1199,
        cantidad: 5,
        imagen: imagenes[0]
    },

    {
        id: 32,
        nombre: "Cortez",
        marca: "Nike",
        talla: "39",
        color: "Blanco / Rojo",
        precio: 749,
        cantidad: 10,
        imagen: imagenes[1]
    },

    {
        id: 33,
        nombre: "Campus 00s",
        marca: "Adidas",
        talla: "41",
        color: "Verde",
        precio: 899,
        cantidad: 8,
        imagen: imagenes[2]
    },

    {
        id: 34,
        nombre: "Rivalry Low",
        marca: "Adidas",
        talla: "42",
        color: "Blanco / Azul",
        precio: 849,
        cantidad: 9,
        imagen: imagenes[3]
    },

    {
        id: 35,
        nombre: "Slipstream",
        marca: "Puma",
        talla: "40",
        color: "Blanco / Verde",
        precio: 899,
        cantidad: 7,
        imagen: imagenes[4]
    },

    {
        id: 36,
        nombre: "Palermo",
        marca: "Puma",
        talla: "39",
        color: "Azul",
        precio: 799,
        cantidad: 10,
        imagen: imagenes[5]
    },

    {
        id: 37,
        nombre: "FuelCell",
        marca: "New Balance",
        talla: "43",
        color: "Negro",
        precio: 1099,
        cantidad: 6,
        imagen: imagenes[6]
    },

    {
        id: 38,
        nombre: "Fresh Foam",
        marca: "New Balance",
        talla: "41",
        color: "Azul",
        precio: 999,
        cantidad: 8,
        imagen: imagenes[7]
    },

    {
        id: 39,
        nombre: "Era",
        marca: "Vans",
        talla: "40",
        color: "Rojo",
        precio: 649,
        cantidad: 12,
        imagen: imagenes[8]
    },

    {
        id: 40,
        nombre: "Pro Leather",
        marca: "Converse",
        talla: "42",
        color: "Blanco",
        precio: 699,
        cantidad: 9,
        imagen: imagenes[9]
    },


    /* ================= PRODUCTOS 41 - 45 ================= */

    {
        id: 41,
        nombre: "Air Max Plus",
        marca: "Nike",
        talla: "43",
        color: "Negro / Azul",
        precio: 1299,
        cantidad: 5,
        imagen: imagenes[0]
    },

    {
        id: 42,
        nombre: "Adizero",
        marca: "Adidas",
        talla: "42",
        color: "Negro / Blanco",
        precio: 1199,
        cantidad: 7,
        imagen: imagenes[2]
    },

    {
        id: 43,
        nombre: "RS-Curve",
        marca: "Puma",
        talla: "41",
        color: "Gris",
        precio: 849,
        cantidad: 8,
        imagen: imagenes[4]
    },

    {
        id: 44,
        nombre: "9060 Shadow",
        marca: "New Balance",
        talla: "42",
        color: "Gris / Blanco",
        precio: 1399,
        cantidad: 4,
        imagen: imagenes[6]
    },

    {
        id: 45,
        nombre: "Chuck 70",
        marca: "Converse",
        talla: "40",
        color: "Negro",
        precio: 799,
        cantidad: 10,
        imagen: imagenes[9]
    }

];


/* =====================================================
   FORMATO DE QUETZALES
===================================================== */

function formatoQuetzales(precio) {

    return new Intl.NumberFormat("es-GT", {
        style: "currency",
        currency: "GTQ",
        minimumFractionDigits: 2
    }).format(precio);

}


/* =====================================================
   MOSTRAR PRODUCTOS
===================================================== */

function mostrarProductos(lista = productos) {

    const container =
        document.getElementById("productosContainer");

    container.innerHTML = "";


    if (lista.length === 0) {

        container.innerHTML = `
            <div style="
                grid-column: 1/-1;
                text-align:center;
                padding:50px;
                color:#777;
            ">
                <h3>No se encontraron productos</h3>
                <p>Prueba con otra búsqueda.</p>
            </div>
        `;

        return;
    }


    lista.forEach(producto => {

        const card = document.createElement("div");

        card.className = "producto-card";


        card.innerHTML = `

            <div class="producto-imagen">

                <img
                    src="${producto.imagen}"
                    alt="${producto.nombre}"
                    loading="lazy"
                    onerror="this.src='${imagenes[0]}'"
                >

            </div>


            <div class="producto-info">

                <span class="marca">
                    ${producto.marca}
                </span>

                <h3>
                    ${producto.nombre}
                </h3>


                <div class="detalles">

                    <span>
                        👟 Talla: ${producto.talla}
                    </span>

                    <span>
                        🎨 ${producto.color}
                    </span>

                </div>


                <div class="precio">

                    ${formatoQuetzales(producto.precio)}

                </div>


                <div class="
                    stock
                    ${producto.cantidad > 0
                        ? "disponible"
                        : "agotado"}
                ">

                    ${
                        producto.cantidad > 0
                        ? `✓ ${producto.cantidad} disponibles`
                        : "✕ Agotado"
                    }

                </div>

            </div>

        `;


        container.appendChild(card);

    });

}


/* =====================================================
   MOSTRAR TABLA
===================================================== */

function mostrarTabla() {

    const tabla =
        document.getElementById("tablaProductos");

    tabla.innerHTML = "";


    productos.forEach(producto => {

        const fila =
            document.createElement("tr");


        fila.innerHTML = `

            <td>

                <img
                    src="${producto.imagen}"
                    class="tabla-img"
                    alt="${producto.nombre}"
                    onerror="this.src='${imagenes[0]}'"
                >

            </td>


            <td>
                ${producto.nombre}
            </td>


            <td>
                ${producto.marca}
            </td>


            <td>
                ${producto.talla}
            </td>


            <td>
                ${producto.color}
            </td>


            <td>
                <strong style="color:#00ffff">
                    ${formatoQuetzales(producto.precio)}
                </strong>
            </td>


            <td>
                ${producto.cantidad}
            </td>


            <td>

                <button
                    class="btn-editar"
                    onclick="editarProducto(${producto.id})"
                >
                    ✏️ Editar
                </button>


                <button
                    class="btn-eliminar"
                    onclick="eliminarProducto(${producto.id})"
                >
                    🗑️ Eliminar
                </button>

            </td>

        `;


        tabla.appendChild(fila);

    });

}


/* =====================================================
   ESTADÍSTICAS
===================================================== */

function actualizarEstadisticas() {

    document.getElementById("totalProductos")
        .textContent = productos.length;


    const totalStock = productos.reduce(
        (total, producto) =>
            total + Number(producto.cantidad),
        0
    );


    document.getElementById("totalStock")
        .textContent = totalStock;

}


/* =====================================================
   AGREGAR / EDITAR
===================================================== */

const formulario =
    document.getElementById("productoForm");


formulario.addEventListener("submit", function(event) {

    event.preventDefault();


    const id =
        document.getElementById("productoId").value;


    const nuevoProducto = {

        nombre:
            document.getElementById("nombre").value,

        marca:
            document.getElementById("marca").value,

        talla:
            document.getElementById("talla").value,

        color:
            document.getElementById("color").value,

        precio:
            Number(document.getElementById("precio").value),

        cantidad:
            Number(document.getElementById("cantidad").value),

        imagen:
            document.getElementById("imagen").value

    };


    /* ================= EDITAR ================= */

    if (id) {

        const indice =
            productos.findIndex(
                producto =>
                    producto.id === Number(id)
            );


        if (indice !== -1) {

            productos[indice] = {

                id: Number(id),

                ...nuevoProducto

            };

        }

    }


    /* ================= AGREGAR ================= */

    else {

        const nuevoId =
            productos.length > 0
                ? Math.max(
                    ...productos.map(p => p.id)
                ) + 1
                : 1;


        productos.push({

            id: nuevoId,

            ...nuevoProducto

        });

    }


    formulario.reset();

    document.getElementById("productoId").value = "";

    document.getElementById("btnGuardar")
        .textContent = "➕ AGREGAR PRODUCTO";


    mostrarProductos();

    mostrarTabla();

    actualizarEstadisticas();


    alert("Producto guardado correctamente. ✓");

});


/* =====================================================
   EDITAR PRODUCTO
===================================================== */

function editarProducto(id) {

    const producto =
        productos.find(
            producto =>
                producto.id === id
        );


    if (!producto) return;


    document.getElementById("productoId")
        .value = producto.id;


    document.getElementById("nombre")
        .value = producto.nombre;


    document.getElementById("marca")
        .value = producto.marca;


    document.getElementById("talla")
        .value = producto.talla;


    document.getElementById("color")
        .value = producto.color;


    document.getElementById("precio")
        .value = producto.precio;


    document.getElementById("cantidad")
        .value = producto.cantidad;


    document.getElementById("imagen")
        .value = producto.imagen;


    document.getElementById("btnGuardar")
        .textContent = "💾 GUARDAR CAMBIOS";


    document.getElementById("administrar")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =====================================================
   ELIMINAR PRODUCTO
===================================================== */

function eliminarProducto(id) {

    const producto =
        productos.find(
            producto =>
                producto.id === id
        );


    if (!producto) return;


    const confirmar =
        confirm(
            `¿Deseas eliminar "${producto.nombre}"?`
        );


    if (!confirmar) return;


    productos =
        productos.filter(
            producto =>
                producto.id !== id
        );


    mostrarProductos();

    mostrarTabla();

    actualizarEstadisticas();

}


/* =====================================================
   CANCELAR EDICIÓN
===================================================== */

document
    .getElementById("btnCancelar")
    .addEventListener("click", function() {

        formulario.reset();

        document.getElementById("productoId")
            .value = "";

        document.getElementById("btnGuardar")
            .textContent = "➕ AGREGAR PRODUCTO";

    });


/* =====================================================
   BUSCADOR
===================================================== */

document
    .getElementById("buscar")
    .addEventListener("input", filtrar);


/* =====================================================
   FILTRO DE MARCA
===================================================== */

document
    .getElementById("filtroMarca")
    .addEventListener("change", filtrar);


/* =====================================================
   FUNCIÓN DE FILTRADO
===================================================== */

function filtrar() {

    const texto =
        document
            .getElementById("buscar")
            .value
            .toLowerCase();


    const marca =
        document
            .getElementById("filtroMarca")
            .value;


    const resultado =
        productos.filter(producto => {

            const coincideTexto =

                producto.nombre
                    .toLowerCase()
                    .includes(texto)

                ||

                producto.marca
                    .toLowerCase()
                    .includes(texto)

                ||

                producto.color
                    .toLowerCase()
                    .includes(texto);


            const coincideMarca =
                marca === "todas"
                ||
                producto.marca === marca;


            return coincideTexto && coincideMarca;

        });


    mostrarProductos(resultado);

}


/* =====================================================
   INICIAR SISTEMA
===================================================== */

mostrarProductos();

mostrarTabla();

actualizarEstadisticas();