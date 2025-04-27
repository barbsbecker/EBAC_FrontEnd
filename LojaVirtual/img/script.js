let currentSlide = 0;
const slides = document.querySelectorAll('#carousel-images div');
const totalSlides = slides.length;

// Função para mover o carrossel
function moveToSlide(slideIndex) {
    // Oculta todas as imagens e apenas exibe a atual
    slides.forEach((slide, index) => {
        slide.style.opacity = (index === slideIndex) ? 1 : 0;  // Aplica opacidade 0 para imagens não visíveis
    });
}

// Função para iniciar o carrossel
function startCarousel() {
    moveToSlide(currentSlide);  // Inicializa com a primeira imagem visível

    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;  // Avança o slide automaticamente
        moveToSlide(currentSlide);
    }, 3000);  // Troca a imagem a cada 3 segundos
}

// Iniciar o carrossel ao carregar a página
window.onload = startCarousel;