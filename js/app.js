// Catálogo de 12 Productos Metálicos (RF02) - fotos en /img
const productos = [
    {
        id: 1,
        nombre: 'Varilla Corrugada Sismorresistente 1/2" (12m)',
        categoria: "varillas",
        categoriaLabel: "Varillas",
        descripcion: "Acero grado 60 NTC 2289 de alta adherencia para refuerzo estructural en concreto y cimentaciones.",
        precio: 34500,
        unidad: "Barra x 12 metros",
        imagen: "img/varilla-corrugada.jpg"
    },
    {
        id: 2,
        nombre: 'Varilla Lisa Redonda en Acero 3/8" (6m)',
        categoria: "varillas",
        categoriaLabel: "Varillas",
        descripcion: "Barra de acero al carbono laminado en caliente, ideal para ornamentación, ejes, tensores y herrajes.",
        precio: 18900,
        unidad: "Barra x 6 metros",
        imagen: "img/varilla-lisa.jpg"
    },
    {
        id: 3,
        nombre: "Lámina Troquelada Perforada Calibre 16",
        categoria: "laminas",
        categoriaLabel: "Troquelados",
        descripcion: "Lámina de acero Cold Rolled 1.22m x 2.44m con perforación redonda tresbolillo para ventilación y fachadas.",
        precio: 185000,
        unidad: "Plancha 1.22 x 2.44 m",
        imagen: "img/lamina-troquelada.jpg"
    },
    {
        id: 4,
        nombre: "Lámina de Aluminio Liso Aleación 1100 (1.5mm)",
        categoria: "aluminio",
        categoriaLabel: "Aluminio",
        descripcion: "Lámina liviana resistente a la corrosión, excelente maleabilidad para carrocerías, ductos y señalización.",
        precio: 142000,
        unidad: "Plancha 1.22 x 2.44 m",
        imagen: "img/lamina-aluminio-liso.jpg"
    },
    {
        id: 5,
        nombre: "Lámina Alfajor Antideslizante en Aluminio 3mm",
        categoria: "aluminio",
        categoriaLabel: "Aluminio",
        descripcion: "Lámina diamantada de alto tráfico para pisos industriales, rampas, escaleras y plataformas de carga.",
        precio: 248000,
        unidad: "Plancha 1.22 x 2.44 m",
        imagen: "img/lamina-alfajor.jpg"
    },
    {
        id: 6,
        nombre: 'Perfil Tubular Rectangular en Aluminio 2" x 1"',
        categoria: "aluminio",
        categoriaLabel: "Aluminio",
        descripcion: "Tubo estructural de aluminio anodizado natural de 6 metros para ventanería, divisiones y estructuras livianas.",
        precio: 64000,
        unidad: "Tira x 6 metros",
        imagen: "img/tubo-aluminio.jpg"
    },
    {
        id: 7,
        nombre: "Lámina Galvanizada Lisa Calibre 20",
        categoria: "laminas",
        categoriaLabel: "Láminas",
        descripcion: "Acero recubierto en zinc por inmersión en caliente para cubiertas, canales, campanas y ductería.",
        precio: 118000,
        unidad: "Plancha 1.22 x 2.44 m",
        imagen: "img/lamina-galvanizada.jpg"
    },
    {
        id: 8,
        nombre: "Malla Electrosoldada Estructural 15x15cm (4mm)",
        categoria: "varillas",
        categoriaLabel: "Varillas",
        descripcion: "Panel rígido de 2.35m x 6.00m fabricado con grafiles de acero para placas de entrepiso y pavimentos.",
        precio: 96000,
        unidad: "Panel 2.35 x 6.00 m",
        imagen: "img/malla-electrosoldada.jpg"
    },
    {
        id: 9,
        nombre: "Lámina Troquelada Decorativa Tipo Celosía",
        categoria: "laminas",
        categoriaLabel: "Troquelados",
        descripcion: "Lámina en acero CR calibre 18 con corte troquelado geométrico para cerramientos, pérgolas y arquitectura.",
        precio: 215000,
        unidad: "Plancha 1.20 x 2.40 m",
        imagen: "img/lamina-celosia.jpg"
    },
    {
        id: 10,
        nombre: 'Ángulo Estructural en Acero A36 1.1/2" x 3/16"',
        categoria: "varillas",
        categoriaLabel: "Perfiles Acero",
        descripcion: "Perfil en L de 6 metros para cerchas metálicas, soportes industriales, bastidores y torres.",
        precio: 54500,
        unidad: "Tira x 6 metros",
        imagen: "img/angulo-acero.jpg"
    },
    {
        id: 11,
        nombre: "Lámina Acero Inoxidable 304 Satinado Calibre 18",
        categoria: "laminas",
        categoriaLabel: "Inoxidable",
        descripcion: "Acero inoxidable grado alimenticio y hospitalario resistente a ácidos, humedad y altas temperaturas.",
        precio: 365000,
        unidad: "Plancha 1.22 x 2.44 m",
        imagen: "img/lamina-inoxidable.jpg"
    },
    {
        id: 12,
        nombre: 'Platina de Aluminio Extruido 2" x 1/4" (6m)',
        categoria: "aluminio",
        categoriaLabel: "Aluminio",
        descripcion: "Barra plana maciza de aluminio 6063-T5 para mecanizado, soporte de paneles solares y acabados.",
        precio: 49000,
        unidad: "Barra x 6 metros",
        imagen: "img/platina-aluminio.jpg"
    }
];

// Estado global del carrito cargado desde localStorage (RF07)
let carrito = JSON.parse(localStorage.getItem("metalnorte_carrito")) || [];
let categoriaActual = "todos";

// Referencias al DOM
const gridProductos = document.getElementById("grid-productos");
const tablaCarritoBody = document.getElementById("tabla-carrito-body");
const carritoVacioMsg = document.getElementById("carrito-vacio-msg");
const contadorCarrito = document.getElementById("contador-carrito");
const totalUnidadesEl = document.getElementById("total-unidades");
const subtotalGeneralEl = document.getElementById("subtotal-general");
const costoEnvioEl = document.getElementById("costo-envio");
const totalPagarEl = document.getElementById("total-pagar");
const selectEnvio = document.getElementById("tipo-envio");
const btnVaciarCarrito = document.getElementById("btn-vaciar-carrito");
const btnAbrirCarrito = document.getElementById("btn-abrir-carrito");
const formCheckout = document.getElementById("form-checkout");
const toastEl = document.getElementById("toast");
const modalConfirmacion = document.getElementById("modal-confirmacion");
const detalleConfirmacion = document.getElementById("detalle-confirmacion");
const btnCerrarModal = document.getElementById("btn-cerrar-modal");

// Formateador de moneda en Pesos Colombianos (COP)
function formatearCOP(valor) {
    return "$" + valor.toLocaleString("es-CO") + " COP";
}

// Mostrar notificación temporal
function mostrarToast(mensaje) {
    toastEl.textContent = mensaje;
    toastEl.classList.add("show");
    clearTimeout(toastEl._timer);
    toastEl._timer = setTimeout(() => {
        toastEl.classList.remove("show");
    }, 2800);
}

// Guardar carrito en localStorage (RF07)
function guardarCarrito() {
    localStorage.setItem("metalnorte_carrito", JSON.stringify(carrito));
}

// Renderizar el catálogo de productos (RF02)
function renderizarCatalogo(categoria = "todos") {
    gridProductos.innerHTML = "";
    const filtrados = categoria === "todos"
        ? productos
        : productos.filter(p => p.categoria === categoria);

    filtrados.forEach(producto => {
        const card = document.createElement("article");
        card.className = "product-card";
        card.innerHTML = `
            <div class="product-img-wrapper">
                <span class="product-cat-badge">${producto.categoriaLabel}</span>
                <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy">
            </div>
            <div class="product-body">
                <h3 class="product-title">${producto.nombre}</h3>
                <p class="product-desc">${producto.descripcion}</p>
                <div class="product-footer">
                    <div>
                        <div class="product-price">${formatearCOP(producto.precio)}</div>
                        <span class="product-unit">${producto.unidad}</span>
                    </div>
                    <button class="btn btn-primary btn-block" onclick="agregarAlCarrito(${producto.id})">
                        + Agregar al Carrito
                    </button>
                </div>
            </div>
        `;
        gridProductos.appendChild(card);
    });
}

// Agregar producto al carrito (RF03: si ya existe, incrementa cantidad sin duplicar fila)
function agregarAlCarrito(idProducto) {
    const producto = productos.find(p => p.id === idProducto);
    if (!producto) return;

    const itemExistente = carrito.find(item => item.id === idProducto);
    if (itemExistente) {
        itemExistente.cantidad += 1;
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: 1
        });
    }

    guardarCarrito();
    actualizarVistaCarrito();
    mostrarToast(`Agregado: ${producto.nombre}`);
}

// Modificar cantidad de un producto (+1 o -1)
function cambiarCantidad(idProducto, delta) {
    const index = carrito.findIndex(item => item.id === idProducto);
    if (index === -1) return;

    carrito[index].cantidad += delta;
    if (carrito[index].cantidad <= 0) {
        carrito.splice(index, 1);
    }

    guardarCarrito();
    actualizarVistaCarrito();
}

// Eliminar individualmente un producto del carrito (RF03)
function eliminarProducto(idProducto) {
    carrito = carrito.filter(item => item.id !== idProducto);
    guardarCarrito();
    actualizarVistaCarrito();
    mostrarToast("Producto eliminado del carrito.");
}

// Vaciar completamente el carrito (RF03)
function vaciarCarrito() {
    if (carrito.length === 0) {
        mostrarToast("El carrito ya está vacío.");
        return;
    }
    carrito = [];
    guardarCarrito();
    actualizarVistaCarrito();
    mostrarToast("Se ha vaciado el carrito de compras.");
}

// Actualizar tabla del carrito y cálculos automáticos (RF03, RF04)
function actualizarVistaCarrito() {
    tablaCarritoBody.innerHTML = "";

    let totalUnidades = 0;
    let subtotalGeneral = 0;

    if (carrito.length === 0) {
        carritoVacioMsg.style.display = "block";
        document.querySelector(".table-responsive").style.display = "none";
    } else {
        carritoVacioMsg.style.display = "none";
        document.querySelector(".table-responsive").style.display = "block";

        carrito.forEach(item => {
            const subtotalProducto = item.precio * item.cantidad;
            totalUnidades += item.cantidad;
            subtotalGeneral += subtotalProducto;

            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td><strong>${item.nombre}</strong></td>
                <td>${formatearCOP(item.precio)}</td>
                <td>
                    <div class="qty-controls">
                        <button type="button" class="qty-btn" onclick="cambiarCantidad(${item.id}, -1)" aria-label="Disminuir">-</button>
                        <span class="qty-value">${item.cantidad}</span>
                        <button type="button" class="qty-btn" onclick="cambiarCantidad(${item.id}, 1)" aria-label="Aumentar">+</button>
                    </div>
                </td>
                <td><strong>${formatearCOP(subtotalProducto)}</strong></td>
                <td>
                    <button type="button" class="btn-remove" onclick="eliminarProducto(${item.id})">Eliminar</button>
                </td>
            `;
            tablaCarritoBody.appendChild(tr);
        });
    }

    // Cálculo de envío y total según RF04
    const costoEnvio = carrito.length === 0 ? 0 : Number(selectEnvio.value);
    const totalPagar = carrito.length === 0 ? 0 : subtotalGeneral + costoEnvio;

    contadorCarrito.textContent = totalUnidades;
    totalUnidadesEl.textContent = totalUnidades;
    subtotalGeneralEl.textContent = formatearCOP(subtotalGeneral);
    costoEnvioEl.textContent = formatearCOP(costoEnvio);
    totalPagarEl.textContent = formatearCOP(totalPagar);
}

// Procesar finalización de compra simulada (RF05)
formCheckout.addEventListener("submit", function (e) {
    e.preventDefault();

    if (carrito.length === 0) {
        mostrarToast("⚠️ Agrega al menos un producto metálico antes de finalizar.");
        return;
    }

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const direccion = document.getElementById("direccion").value.trim();

    if (!nombre || !correo || !telefono || !direccion) {
        mostrarToast("⚠️ Por favor completa todos los campos obligatorios.");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
        mostrarToast("⚠️ Ingresa un correo electrónico válido.");
        return;
    }

    const subtotalGeneral = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    const costoEnvio = Number(selectEnvio.value);
    const totalPagar = subtotalGeneral + costoEnvio;
    const numeroOrden = "MN-" + Math.floor(100000 + Math.random() * 900000);

    detalleConfirmacion.innerHTML = `
        <p><strong>Orden N°:</strong> ${numeroOrden}</p>
        <p><strong>Cliente:</strong> ${nombre}</p>
        <p><strong>Correo:</strong> ${correo}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Dirección de entrega:</strong> ${direccion}</p>
        <p><strong>Total Pagado:</strong> <span style="color:#16a34a; font-weight:800;">${formatearCOP(totalPagar)}</span></p>
    `;

    modalConfirmacion.classList.add("open");
    modalConfirmacion.setAttribute("aria-hidden", "false");

    // Limpiar carrito y formulario tras compra exitosa
    carrito = [];
    guardarCarrito();
    actualizarVistaCarrito();
    formCheckout.reset();
});

// Eventos de UI
selectEnvio.addEventListener("change", actualizarVistaCarrito);
btnVaciarCarrito.addEventListener("click", vaciarCarrito);

btnAbrirCarrito.addEventListener("click", () => {
    document.getElementById("carrito-seccion").scrollIntoView({ behavior: "smooth" });
});

btnCerrarModal.addEventListener("click", () => {
    modalConfirmacion.classList.remove("open");
    modalConfirmacion.setAttribute("aria-hidden", "true");
});

// Filtros por categoría
document.querySelectorAll(".filtro-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".filtro-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        categoriaActual = btn.dataset.categoria;
        renderizarCatalogo(categoriaActual);
    });
});

// Inicialización al cargar la página
renderizarCatalogo();
actualizarVistaCarrito();

// Carrusel "Nuestra Empresa"
(function () {
    const carrusel = document.getElementById("carrusel-empresa");
    if (!carrusel) return;
    const track = carrusel.querySelector(".carousel-track");
    const slides = carrusel.querySelectorAll(".carousel-slide");
    const dotsBox = carrusel.querySelector(".carousel-dots");
    let actual = 0;
    let timer = null;

    slides.forEach((_, i) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "carousel-dot" + (i === 0 ? " active" : "");
        dot.setAttribute("aria-label", "Ir a la imagen " + (i + 1));
        dot.addEventListener("click", () => { irA(i); reiniciar(); });
        dotsBox.appendChild(dot);
    });

    function irA(i) {
        actual = (i + slides.length) % slides.length;
        track.style.transform = "translateX(-" + (actual * 100) + "%)";
        dotsBox.querySelectorAll(".carousel-dot").forEach((d, n) => d.classList.toggle("active", n === actual));
    }
    function reiniciar() {
        clearInterval(timer);
        timer = setInterval(() => irA(actual + 1), 5000);
    }

    carrusel.querySelector(".carousel-btn.prev").addEventListener("click", () => { irA(actual - 1); reiniciar(); });
    carrusel.querySelector(".carousel-btn.next").addEventListener("click", () => { irA(actual + 1); reiniciar(); });
    carrusel.addEventListener("mouseenter", () => clearInterval(timer));
    carrusel.addEventListener("mouseleave", reiniciar);
    reiniciar();
})();
