function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Emojis de corazón o caracteres
    heart.innerHTML = '❤️'; 
    
    // Posición aleatoria
    heart.style.left = Math.random() * 100 + 'vw';
    
    // Duración de la animación aleatoria (entre 3 y 5 segundos)
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    
    // Tamaño aleatorio
    heart.style.fontSize = Math.random() * 10 + 10 + 'px'; // entre 10px y 20px
    
    document.getElementById('hearts').appendChild(heart);
    
    // Eliminar el corazón después de que caiga
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Crear un corazón cada 300 milisegundos
setInterval(createHeart, 300);

// --- LÓGICA DEL BOTÓN QUE SE ESCAPA ---
const btnNo = document.getElementById('btn-no');
const btnSi = document.getElementById('btn-si');

if (btnNo) {
    btnNo.addEventListener('mouseover', function() {
        // Generar posiciones aleatorias
        const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
        const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);
        
        // Aplicar nuevas posiciones
        btnNo.style.position = 'absolute';
        btnNo.style.left = x + 'px';
        btnNo.style.top = y + 'px';
    });
}

// --- LÓGICA DE LA CELEBRACIÓN ---
function celebrar() {
    // Ocultar la tarjeta de pregunta
    document.getElementById('main-card').style.display = 'none';
    
    // Mostrar la tarjeta de victoria
    const victory = document.getElementById('victory-screen');
    victory.style.display = 'block';
    
    // Lanzar muchos corazones extra
    for(let i = 0; i < 50; i++) {
        setTimeout(createHeart, i * 50);
    }
    
    // Efecto de confeti (opcional)
    alert("¡Te amo! ❤️ Gracias por decir que sí.");
}