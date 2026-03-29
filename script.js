window.onload = function() {
    const video = document.getElementById('movveVideo');
    const overlay = document.getElementById('overlayBloqueo');
    const btnPro = document.querySelector('.btn-pro');
    
    // TIEMPO DE ESPERA: 1 Minuto (60,000 milisegundos)
    const tiempoEspera = 60000; 

    console.log("MOVVE SYSTEM: Monitoreando tiempo de sesión...");

    // Iniciar temporizador
    setTimeout(() => {
        if (overlay) {
            overlay.style.display = 'flex';
            // Pausar video nativo para forzar atención
            if (video && !video.paused) {
                video.pause();
            }
            console.log("MOVVE SYSTEM: Contenido bloqueado. Esperando verificación.");
        }
    }, tiempoEspera);

    // Manejador del botón de desbloqueo
    if (btnPro) {
        btnPro.addEventListener('click', function() {
            iniciarProcesoAcceso();
        });
    }
};

function iniciarProcesoAcceso() {
    const mainContent = document.getElementById('main-content');
    const loader = document.getElementById('loader');
    const fill = document.getElementById('fill');

    // Cambiar visualización
    mainContent.style.display = 'none';
    loader.style.display = 'block';

    // Iniciar animación de barra de progreso
    setTimeout(() => {
        fill.style.width = '100%';
    }, 100);

    // REDIRECCIÓN FINAL A TU SITIO WEB TRAS 5 SEGUNDOS
    setTimeout(() => {
        console.log("MOVVE SYSTEM: Redirigiendo a sitio oficial...");
        window.location.href = "https://movveplaneta.site/";
    }, 5000);
}
