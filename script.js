/**
 * Redirige al usuario a la página especificada al hacer clic en un producto.
 * @param {string} url - Ruta del archivo HTML al que se quiere redirigir.
 */


function goToProductPage(url) {
    window.location.href = url; // Redirige a la URL especificada
}


/**
 * Filtra los productos en tiempo real basado en el texto ingresado en el campo de búsqueda.
 */
function filterProducts() {
    // Obtener el texto ingresado en el campo de búsqueda
    const input = document.getElementById("searchBar").value.toLowerCase();
    // Seleccionar todas las casillas de productos
    const products = document.querySelectorAll(".product");
    let hasResults = false; // Bandera para saber si hay resultados coincidentes

    // Recorrer todos los productos y mostrar/ocultar según el filtro
    products.forEach((product) => {
        const title = product.querySelector(".details h3").textContent.toLowerCase();
        if (title.includes(input)) {
            product.style.display = "flex"; // Mostrar producto
            hasResults = true;
        } else {
            product.style.display = "none"; // Ocultar producto
        }
    });

    // Mostrar u ocultar el mensaje de "No hay resultados"
    const noResults = document.getElementById("noResults");
    noResults.style.display = hasResults ? "none" : "block";
}



document.addEventListener("DOMContentLoaded", function() {
    // Busca elementos de anuncios conocidos
    const ads = document.querySelectorAll(".ad-container, .banner-ad");
    ads.forEach(ad => ad.remove());
});


document.addEventListener("DOMContentLoaded", function () {
    // Lista de selectores para identificar anuncios
    const adSelectors = [
        ".ad-container",       // Clases comunes de contenedores de anuncios
        ".banner-ad",          // Banners publicitarios
        "iframe[src*='ads']",  // iFrames con URLs relacionadas con anuncios
        "div[class*='ads']",   // Divs con 'ads' en su clase
        "[id*='ads']"          // Elementos con IDs que contienen 'ads'
    ];

    // Función para eliminar elementos coincidentes con los selectores
    function removeAds() {
        adSelectors.forEach(selector => {
            const ads = document.querySelectorAll(selector);
            ads.forEach(ad => {
                ad.remove(); // Eliminar cada elemento encontrado
                console.log(`Elemento eliminado: ${selector}`);
            });
        });
    }

    // Eliminar anuncios inicialmente
    removeAds();

    // Observar el DOM para eliminar anuncios cargados dinámicamente
    const observer = new MutationObserver(() => {
        removeAds();
    });

    // Configuración del observador para monitorear cambios en el DOM
    observer.observe(document.body, { childList: true, subtree: true });
});
