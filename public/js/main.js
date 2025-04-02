// Menu Mobile
function setupMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const mainNav = document.querySelector('.main-nav');
  
    if (mobileMenuBtn && mainNav) {
      mobileMenuBtn.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        mobileMenuBtn.innerHTML = mainNav.classList.contains('active') ? 
          '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
      });
    }
  }
  
  // Atualizar ano do copyright
  function updateCopyright() {
    const copyrightElement = document.querySelector('.copyright p');
    if (copyrightElement) {
      const year = new Date().getFullYear();
      copyrightElement.textContent = `© ${year} Turismo Moz. Todos os direitos reservados.`;
    }
  }
  
  // Inicializar componentes
  document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
    updateCopyright();
    
    // Adiciona classe active no menu
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
      const linkPage = link.getAttribute('href').split('/').pop();
      if (currentPage === linkPage) {
        link.classList.add('active');
      }
    });
  });