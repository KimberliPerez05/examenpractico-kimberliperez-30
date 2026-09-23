/* =====================================================
   NEONKICKS GT
   SISTEMA CRUD + CARRITO + FACTURA
===================================================== */


/* =====================================================
   CONFIGURACIÓN
===================================================== */

const CLAVE_PRODUCTOS = "NEONKICKS_PRODUCTOS";

const CLAVE_CARRITO = "NEONKICKS_CARRITO";


/* =====================================================
   IMÁGENES REALES
===================================================== */

const imagenes = [

    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=90",

    "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=90",

    "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=900&q=90",

    "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=90",

    "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=90",

    "https://images.unsplash.com/photo-1554134417-4d16c9df4e80?auto=format&fit=crop&w=900&q=90",

    "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=900&q=90",

    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=90",

    "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=90",

    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=90"

];



/* =====================================================
   PRODUCTOS INICIALES
   45 PRODUCTOS
===================================================== */

const nombres = [

    "Neon Runner X",
    "Cyber Street 01",
    "Volt Air Pro",
    "Urban Pulse",
    "Neon Force",
    "Lunar Dash",
    "Electric Wave",
    "Shadow Flux",
    "Galaxy Sprint",

    "Neon Court",
    "Hyper Drive",
    "Aero Light",
    "Pixel Runner",
    "Midnight Boost",
    "Volt Classic",
    "Future Step",
    "Street Nova",
    "Laser Motion",

    "Neon Edge",
    "Quantum Run",
    "Urban Flash",
    "Chrome Runner",
    "Pulse Max",
    "Cyber Jump",
    "Neon Storm",
    "Velocity GT",
    "Night Rider",
    "Solar Flex",

    "Electric Court",
    "Apex Neon",
    "Street Beam",
    "Hyper Urban",
    "Neon Gravity",
    "Future Court",
    "Volt Runner",
    "Cosmic Step",
    "Turbo Glow",
    "Neon Track",

    "Digital Dash",
    "Urban Spark",
    "Neon Impact",
    "Flash Runner",
    "Cyber Flex",
    "Neon Legend",
    "Infinity Step"

];


const categorias = [

    "Running",
    "Urbano",
    "Basket",
    "Casual",
    "Outdoor"

];


const colores = [

    "Negro / Verde neón",
    "Blanco / Rosa neón",
    "Negro / Azul eléctrico",
    "Gris / Lima",
    "Blanco / Cian",
    "Morado / Rosa",
    "Negro / Naranja",
    "Azul / Cian"

];



/* =====================================================
   CREAR PRODUCTOS
===================================================== */

function crearProductosIniciales() {

    return nombres.map((nombre, indice) => {

        return {

            id: indice + 1,

            nombre: nombre,

            marca: "NEONKICKS GT",

            categoria:
                categorias[indice % categorias.length],

            talla:
                38 + (indice % 6),

            color:
                colores[indice % colores.length],

            precio:
                399 +
                (indice % 10) * 35 +
                (indice % 3) * 10,

            cantidad:
                5 + ((indice * 3) % 26),

            imagen:
                imagenes[indice % imagenes.length]

        };

    });

}



/* =====================================================
   CARGAR PRODUCTOS
===================================================== */

let productos =
    JSON.parse(
        localStorage.getItem(CLAVE_PRODUCTOS)
    ) || crearProductosIniciales();



/* =====================================================
   CARGAR CARRITO
===================================================== */

let carrito =
    JSON.parse(
        localStorage.getItem(CLAVE_CARRITO)
    ) || [];



/* =====================================================
   GUARDAR PRODUCTOS
===================================================== */

function guardarProductos() {

    localStorage.setItem(
        CLAVE_PRODUCTOS,
        JSON.stringify(productos)
    );

}



/* =====================================================
   GUARDAR CARRITO
===================================================== */

function guardarCarrito() {

    localStorage.setItem(
        CLAVE_CARRITO,
        JSON.stringify(carrito)
    );

}



/* =====================================================
   FORMATO DE DINERO
===================================================== */

function dinero(numero) {

    return "Q " +
        Number(numero).toLocaleString(
            "es-GT",
            {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }
        );

}



/* =====================================================
   ESCAPAR TEXTO
===================================================== */

function escapar(texto) {

    return String(texto).replace(
        /[&<>"']/g,
        function (caracter) {

            const caracteres = {

                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#039;"

            };

            return caracteres[caracter];

        }
    );

}



/* =====================================================
   MOSTRAR PRODUCTOS
===================================================== */

function mostrarProductos() {

    const contenedor =
        document.getElementById(
            "contenedorProductos"
        );


    const busqueda =
        document.getElementById(
            "buscarProducto"
        ).value.toLowerCase();


    const categoria =
        document.getElementById(
            "filtroCategoria"
        ).value;


    const resultados =
        productos.filter(function(producto) {

            const coincideBusqueda =

                producto.nombre
                    .toLowerCase()
                    .includes(busqueda)

                ||

                producto.marca
                    .toLowerCase()
                    .includes(busqueda)

                ||

                producto.color
                    .toLowerCase()
                    .includes(busqueda);


            const coincideCategoria =

                categoria === "Todos"

                ||

                producto.categoria === categoria;


            return (
                coincideBusqueda &&
                coincideCategoria
            );

        });



    if (resultados.length === 0) {

        contenedor.innerHTML = `

            <div style="
                grid-column:1/-1;
                text-align:center;
                padding:50px;
                color:#9da6c5;
            ">

                No se encontraron productos.

            </div>

        `;

        return;

    }



    contenedor.innerHTML =
        resultados.map(function(producto) {

            return `

                <article class="producto">

                    <div class="producto-imagen">

                        <img
                            src="${producto.imagen}"
                            alt="${escapar(producto.nombre)}"
                            onerror="
                                this.src='${imagenes[0]}'
                            "
                        >

                        <span class="categoria">

                            ${escapar(producto.categoria)}

                        </span>

                        <span class="stock">

                            ${
                                producto.cantidad > 0
                                ?
                                producto.cantidad +
                                " disponibles"
                                :
                                "Agotado"
                            }

                        </span>

                    </div>


                    <div class="producto-info">

                        <span class="marca">

                            ${escapar(producto.marca)}

                        </span>

                        <h3>

                            ${escapar(producto.nombre)}

                        </h3>

                        <p class="detalles">

                            Talla ${escapar(producto.talla)}
                            ·
                            ${escapar(producto.color)}

                        </p>


                        <div class="precio-fila">

                            <span class="precio">

                                ${dinero(producto.precio)}

                            </span>


                            <button
                                class="btn-comprar"
                                onclick="
                                    agregarCarrito(
                                        ${producto.id}
                                    )
                                "
                                ${
                                    producto.cantidad <= 0
                                    ?
                                    "disabled"
                                    :
                                    ""
                                }
                            >

                                🛒 Agregar

                            </button>

                        </div>

                    </div>


                    <!-- EDITAR Y ELIMINAR -->

                    <div class="acciones-producto">

                        <button
                            class="btn-editar"
                            onclick="
                                editarProducto(
                                    ${producto.id}
                                )
                            "
                        >

                            ✏️ Editar

                        </button>


                        <button
                            class="btn-eliminar"
                            onclick="
                                eliminarProducto(
                                    ${producto.id}
                                )
                            "
                        >

                            🗑️ Eliminar

                        </button>

                    </div>

                </article>

            `;

        }).join("");


    document.getElementById(
        "totalProductosInicio"
    ).textContent =
        productos.length + "+";

}



/* =====================================================
   MOSTRAR TABLA ADMINISTRACIÓN
===================================================== */

function mostrarTabla() {

    const tabla =
        document.getElementById(
            "tablaProductos"
        );


    tabla.innerHTML =
        productos.map(function(producto) {

            return `

                <tr>

                    <td>

                        <img
                            src="${producto.imagen}"
                            alt=""
                        >

                    </td>


                    <td>

                        <strong>

                            ${escapar(producto.nombre)}

                        </strong>

                        <br>

                        <small>

                            ${escapar(producto.categoria)}

                        </small>

                    </td>


                    <td>

                        ${escapar(producto.marca)}

                    </td>


                    <td>

                        ${escapar(producto.talla)}

                    </td>


                    <td>

                        ${escapar(producto.color)}

                    </td>


                    <td>

                        ${dinero(producto.precio)}

                    </td>


                    <td>

                        ${producto.cantidad}

                    </td>


                    <td>

                        <div class="acciones-tabla">

                            <button
                                class="pequeno editar"
                                onclick="
                                    editarProducto(
                                        ${producto.id}
                                    )
                                "
                            >

                                ✏ Editar

                            </button>


                            <button
                                class="pequeno eliminar"
                                onclick="
                                    eliminarProducto(
                                        ${producto.id}
                                    )
                                "
                            >

                                🗑 Eliminar

                            </button>

                        </div>

                    </td>

                </tr>

            `;

        }).join("");

}



/* =====================================================
   ABRIR FORMULARIO
===================================================== */

function abrirFormulario(producto = null) {

    document
        .getElementById("modalProducto")
        .classList.add("activo");


    document
        .getElementById("tituloFormulario")
        .textContent =

        producto
        ?
        "Editar producto"
        :
        "Registrar producto";


    document.getElementById(
        "productoId"
    ).value =
        producto ? producto.id : "";


    document.getElementById(
        "nombre"
    ).value =
        producto ? producto.nombre : "";


    document.getElementById(
        "marca"
    ).value =
        producto
        ?
        producto.marca
        :
        "NEONKICKS GT";


    document.getElementById(
        "categoria"
    ).value =
        producto
        ?
        producto.categoria
        :
        "Running";


    document.getElementById(
        "talla"
    ).value =
        producto ? producto.talla : "40";


    document.getElementById(
        "color"
    ).value =
        producto
        ?
        producto.color
        :
        "Negro / Verde neón";


    document.getElementById(
        "precio"
    ).value =
        producto ? producto.precio : "499";


    document.getElementById(
        "cantidad"
    ).value =
        producto ? producto.cantidad : "10";


    document.getElementById(
        "imagen"
    ).value =
        producto
        ?
        producto.imagen
        :
        imagenes[0];

}



/* =====================================================
   EDITAR PRODUCTO
===================================================== */

function editarProducto(id) {

    const producto =
        productos.find(function(p) {

            return p.id === id;

        });


    if (producto) {

        abrirFormulario(producto);

    }

}



/* =====================================================
   ELIMINAR PRODUCTO
===================================================== */

function eliminarProducto(id) {

    const producto =
        productos.find(function(p) {

            return p.id === id;

        });


    if (!producto) return;


    const confirmar =
        confirm(
            "¿Seguro que deseas eliminar " +
            producto.nombre +
            "?"
        );


    if (!confirmar) return;


    productos =
        productos.filter(function(p) {

            return p.id !== id;

        });


    carrito =
        carrito.filter(function(item) {

            return item.id !== id;

        });


    guardarProductos();

    guardarCarrito();

    mostrarProductos();

    mostrarTabla();

    mostrarCarrito();

    notificar(
        "Producto eliminado correctamente."
    );

}



/* =====================================================
   GUARDAR PRODUCTO
===================================================== */

document
    .getElementById("formProducto")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const id =
                Number(
                    document.getElementById(
                        "productoId"
                    ).value
                );


            const nuevoProducto = {

                nombre:
                    document.getElementById(
                        "nombre"
                    ).value.trim(),

                marca:
                    document.getElementById(
                        "marca"
                    ).value.trim(),

                categoria:
                    document.getElementById(
                        "categoria"
                    ).value,

                talla:
                    document.getElementById(
                        "talla"
                    ).value.trim(),

                color:
                    document.getElementById(
                        "color"
                    ).value.trim(),

                precio:
                    Number(
                        document.getElementById(
                            "precio"
                        ).value
                    ),

                cantidad:
                    Number(
                        document.getElementById(
                            "cantidad"
                        ).value
                    ),

                imagen:
                    document.getElementById(
                        "imagen"
                    ).value.trim()

            };



            /* EDITAR */

            if (id) {

                const indice =
                    productos.findIndex(
                        function(p) {

                            return p.id === id;

                        }
                    );


                if (indice !== -1) {

                    productos[indice] = {

                        id: id,

                        ...nuevoProducto

                    };

                }


                notificar(
                    "Producto actualizado correctamente."
                );

            }


            /* REGISTRAR */

            else {

                productos.unshift({

                    id: Date.now(),

                    ...nuevoProducto

                });


                notificar(
                    "Producto registrado correctamente."
                );

            }


            guardarProductos();

            mostrarProductos();

            mostrarTabla();

            cerrarModal(
                "modalProducto"
            );


            this.reset();


            document.getElementById(
                "marca"
            ).value =
                "NEONKICKS GT";

        }
    );



/* =====================================================
   AGREGAR AL CARRITO
===================================================== */

function agregarCarrito(id) {

    const producto =
        productos.find(function(p) {

            return p.id === id;

        });


    if (!producto) return;


    if (producto.cantidad <= 0) {

        notificar(
            "Este producto está agotado."
        );

        return;

    }


    const existente =
        carrito.find(function(item) {

            return item.id === id;

        });


    if (existente) {

        if (
            existente.cantidad <
            producto.cantidad
        ) {

            existente.cantidad++;

        }

        else {

            notificar(
                "No hay más unidades disponibles."
            );

            return;

        }

    }


    else {

        carrito.push({

            id: id,

            cantidad: 1

        });

    }


    guardarCarrito();

    mostrarCarrito();

    notificar(
        "Producto agregado al carrito 🛒"
    );

}



/* =====================================================
   MOSTRAR CARRITO
===================================================== */

function mostrarCarrito() {

    const contenedor =
        document.getElementById(
            "productosCarrito"
        );


    let total = 0;

    let cantidadTotal = 0;


    if (carrito.length === 0) {

        contenedor.innerHTML = `

            <div style="
                text-align:center;
                padding:40px;
                color:#9da6c5;
            ">

                🛒 Tu carrito está vacío.

            </div>

        `;

        document.getElementById(
            "totalCarrito"
        ).textContent =
            "Q 0.00";

        document.getElementById(
            "cantidadCarrito"
        ).textContent =
            "0";

        return;

    }



    contenedor.innerHTML =
        carrito.map(function(item) {

            const producto =
                productos.find(function(p) {

                    return p.id === item.id;

                });


            if (!producto) return "";


            const subtotal =
                producto.precio *
                item.cantidad;


            total += subtotal;

            cantidadTotal +=
                item.cantidad;


            return `

                <div class="item-carrito">

                    <img
                        src="${producto.imagen}"
                        alt=""
                    >


                    <div>

                        <strong>

                            ${escapar(
                                producto.nombre
                            )}

                        </strong>

                        <small>

                            ${dinero(
                                producto.precio
                            )}

                        </small>

                    </div>


                    <div class="cantidad">

                        <button
                            onclick="
                                cambiarCantidad(
                                    ${producto.id},
                                    -1
                                )
                            "
                        >
                            −
                        </button>


                        <span>

                            ${item.cantidad}

                        </span>


                        <button
                            onclick="
                                cambiarCantidad(
                                    ${producto.id},
                                    1
                                )
                            "
                        >
                            +
                        </button>

                    </div>


                    <button
                        class="eliminar-carrito"
                        onclick="
                            quitarCarrito(
                                ${producto.id}
                            )
                        "
                    >

                        🗑

                    </button>

                </div>

            `;

        }).join("");


    document.getElementById(
        "totalCarrito"
    ).textContent =
        dinero(total);


    document.getElementById(
        "cantidadCarrito"
    ).textContent =
        cantidadTotal;


    guardarCarrito();

}



/* =====================================================
   CAMBIAR CANTIDAD
===================================================== */

function cambiarCantidad(id, cambio) {

    const item =
        carrito.find(function(i) {

            return i.id === id;

        });


    const producto =
        productos.find(function(p) {

            return p.id === id;

        });


    if (!item || !producto) return;


    item.cantidad += cambio;


    if (item.cantidad <= 0) {

        quitarCarrito(id);

        return;

    }


    if (
        item.cantidad >
        producto.cantidad
    ) {

        item.cantidad =
            producto.cantidad;

        notificar(
            "No hay más unidades disponibles."
        );

    }


    guardarCarrito();

    mostrarCarrito();

}



/* =====================================================
   QUITAR DEL CARRITO
===================================================== */

function quitarCarrito(id) {

    carrito =
        carrito.filter(function(item) {

            return item.id !== id;

        });


    guardarCarrito();

    mostrarCarrito();

}



/* =====================================================
   ABRIR CARRITO
===================================================== */

function abrirCarrito() {

    mostrarCarrito();

    document
        .getElementById("modalCarrito")
        .classList.add("activo");

}



/* =====================================================
   FINALIZAR COMPRA
===================================================== */

function finalizarCompra() {

    if (carrito.length === 0) {

        notificar(
            "Agrega productos al carrito primero."
        );

        return;

    }


    const productosCompra = [];


    carrito.forEach(function(item) {

        const producto =
            productos.find(function(p) {

                return p.id === item.id;

            });


        if (producto) {

            productosCompra.push({

                producto: producto,

                cantidad: item.cantidad

            });

        }

    });


    if (
        productosCompra.length === 0
    ) {

        return;

    }


    /* =============================================
       CALCULAR TOTAL
    ============================================= */

    let total = 0;


    productosCompra.forEach(
        function(item) {

            total +=
                item.producto.precio *
                item.cantidad;

        }
    );



    /* =============================================
       NÚMERO DE FACTURA
    ============================================= */

    const numeroFactura =
        "NG-" +
        new Date().getFullYear() +
        "-" +
        String(
            Date.now()
        ).slice(-6);



    /* =============================================
       FECHA
    ============================================= */

    const fecha =
        new Date().toLocaleString(
            "es-GT"
        );



    /* =============================================
       CREAR FACTURA
    ============================================= */

    let filas = "";


    productosCompra.forEach(
        function(item) {

            const subtotal =
                item.producto.precio *
                item.cantidad;


            filas += `

                <tr>

                    <td>

                        ${escapar(
                            item.producto.nombre
                        )}

                        <br>

                        <small>

                            Talla:
                            ${escapar(
                                item.producto.talla
                            )}

                            ·

                            ${escapar(
                                item.producto.color
                            )}

                        </small>

                    </td>


                    <td>

                        ${item.cantidad}

                    </td>


                    <td>

                        ${dinero(
                            item.producto.precio
                        )}

                    </td>


                    <td>

                        ${dinero(
                            subtotal
                        )}

                    </td>

                </tr>

            `;

        }
    );



    document.getElementById(
        "contenidoFactura"
    ).innerHTML = `

        <div class="encabezado-factura">

            <div>

                <div class="marca-factura">

                    <span>NEON</span>KICKS
                    <b>GT</b>

                </div>

                <small>
                    Venta de calzado
                </small>

            </div>


            <div class="datos-factura">

                <strong>
                    FACTURA
                </strong>

                <br>

                No.
                ${numeroFactura}

                <br>

                ${fecha}

            </div>

        </div>



        <table class="tabla-factura">

            <thead>

                <tr>

                    <th>
                        Producto
                    </th>

                    <th>
                        Cant.
                    </th>

                    <th>
                        Precio
                    </th>

                    <th>
                        Total
                    </th>

                </tr>

            </thead>


            <tbody>

                ${filas}

            </tbody>

        </table>



        <div class="total-factura">

            TOTAL:
            ${dinero(total)}

        </div>


        <p class="nota-factura">

            Gracias por comprar en
            NEONKICKS GT.

            Esta factura fue generada
            automáticamente por el sistema
            de ventas.

        </p>

    `;



    /* =============================================
       ACTUALIZAR INVENTARIO
    ============================================= */

    productosCompra.forEach(
        function(item) {

            item.producto.cantidad -=
                item.cantidad;

        }
    );



    /* =============================================
       VACIAR CARRITO
    ============================================= */

    carrito = [];



    guardarProductos();

    guardarCarrito();



    mostrarProductos();

    mostrarTabla();

    mostrarCarrito();



    /* =============================================
       CERRAR CARRITO
    ============================================= */

    cerrarModal(
        "modalCarrito"
    );



    /* =============================================
       MOSTRAR UNA SOLA FACTURA
    ============================================= */

    document
        .getElementById("modalFactura")
        .classList.add("activo");

}



/* =====================================================
   CERRAR MODAL
===================================================== */

function cerrarModal(id) {

    document
        .getElementById(id)
        .classList.remove("activo");

}



/* =====================================================
   NOTIFICACIONES
===================================================== */

function notificar(mensaje) {

    const notificacion =
        document.getElementById(
            "notificacion"
        );


    notificacion.textContent =
        mensaje;


    notificacion.classList.add(
        "mostrar"
    );


    clearTimeout(
        window.temporizadorNotificacion
    );


    window.temporizadorNotificacion =
        setTimeout(
            function() {

                notificacion.classList.remove(
                    "mostrar"
                );

            },
            2500
        );

}



/* =====================================================
   CERRAR MODAL AL DAR CLICK FUERA
===================================================== */

document
    .querySelectorAll(".modal")
    .forEach(function(modal) {

        modal.addEventListener(
            "click",
            function(event) {

                if (
                    event.target === modal
                ) {

                    modal.classList.remove(
                        "activo"
                    );

                }

            }
        );

    });



/* =====================================================
   INICIALIZAR SISTEMA
===================================================== */

mostrarProductos();

mostrarTabla();

mostrarCarrito();