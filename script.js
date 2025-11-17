// Control de paginación de la presentación futurista

document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pageIndicator = document.getElementById('pageIndicator');
    const pages = document.querySelectorAll('.page-content');
    const totalPages = pages.length;
    let currentPageIndex = 0;

    function updateDisplay() {
        pages.forEach((page, index) => {
            if (index === currentPageIndex) {
                page.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });

        pageIndicator.textContent = `Página ${currentPageIndex + 1} / ${totalPages}`;

        prevBtn.disabled = (currentPageIndex === 0);
        nextBtn.disabled = (currentPageIndex === totalPages - 1);

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    nextBtn.addEventListener('click', () => {
        if (currentPageIndex < totalPages - 1) {
            currentPageIndex++;
            updateDisplay();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentPageIndex > 0) {
            currentPageIndex--;
            updateDisplay();
        }
    });

    // Navegación con teclas ← y →
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            if (currentPageIndex < totalPages - 1) {
                currentPageIndex++;
                updateDisplay();
            }
        } else if (event.key === 'ArrowLeft') {
            if (currentPageIndex > 0) {
                currentPageIndex--;
                updateDisplay();
            }
        }
    });

    // Configuración inicial
    updateDisplay();
});
