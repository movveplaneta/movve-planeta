// 1. CONFIGURACIÓN DEL TIEMPO: 60 Segundos
const tiempoEspera = 60000; 

// Activar el bloqueo después de 1 minuto
setTimeout(() => {
    const overlay = document.getElementById('overlayBloqueo');
    overlay.style.display = 'flex';
}, tiempoEspera);

// 2. LÓGICA DE DESBLOQUEO TRAS CLIC EN ANUNCIO
function iniciarAcceso() {
    const mainContent = document.getElementById('main-content');
    const loader = document.getElementById('loader');
    const fill = document.getElementById('fill');

    // Cambiar vista: ocultar botón, mostrar carga
    mainContent.style.display = 'none';
    loader.style.display = 'block';

    // Iniciar animación de la barra (4 segundos)
    setTimeout(() => {
        fill.style.width = '100%';
    }, 100);

    // Cambiar estado visual a mitad de carga
    setTimeout(() => {
        document.getElementById('statusLabel').innerText = "ACCESO VERIFICADO ✅";
    }, 2500);

    // Quitar el bloqueo después de que termine la barra (4.5 segundos)
    setTimeout(() => {
        document.getElementById('overlayBloqueo').style.display = 'none';
    }, 4500);
}