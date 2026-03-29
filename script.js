window.onload = function() {
    const video = document.getElementById('movveVideo');
    const overlay = document.getElementById('overlayBloqueo');
    const btn = document.getElementById('btnDesbloquear');

    // 1. TEMPORIZADOR DE BLOQUEO (30 SEGUNDOS)
    setTimeout(() => {
        if (overlay) {
            overlay.style.display = 'flex';
            if (video && !video.paused) video.pause();
            console.log("MOVVE: Bloqueo de 30 segundos activo.");
        }
    }, 30000);

    // 2. ACCIÓN DE DESBLOQUEO
    if (btn) {
        btn.addEventListener('click', function() {
            document.getElementById('main-content').style.display = 'none';
            document.getElementById('loader').style.display = 'block';

            setTimeout(() => {
                document.getElementById('fill').style.width = '100%';
            }, 100);

            // Redirección final tras 5 segundos de "validación"
            setTimeout(() => {
                window.location.href = "https://movveplaneta.site/";
            }, 5000);
        });
    }

    // 3. REDIRECCIÓN SI EL VIDEO TERMINA SOLO
    if (video) {
        video.onended = function() {
            window.location.href = "https://movveplaneta.site/";
        };
    }
};