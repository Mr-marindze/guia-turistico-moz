// Dados de exemplo
const featuredDestinations = [
  {
    id: 1,
    name: "Ilha de Moçambique",
    image: "/images/destinations/ilha-mozambique.jpg",
    description: "Patrimônio Mundial da UNESCO com arquitetura histórica",
    province: "Nampula"
  },
  {
    id: 2,
    name: "Praia do Tofo",
    image: "/images/destinations/tofo.jpg",
    description: "Paraíso para mergulho e observação de tubarões-baleia",
    province: "Inhambane"
  }
];

const latestNews = [
  {
    id: 1,
    title: "Moçambique entre os melhores destinos para 2025",
    image: "/images/news/noticia1.jpg",
    date: "15 Out 2023",
    excerpt: "Revista internacional destaca as praias do arquipélago do Bazaruto",
    category: "Destaque"
  }
];

// Função para verificar se elementos existem
function checkElements() {
  const destinationsContainer = document.getElementById('featuredDestinations');
  const newsContainer = document.getElementById('latestNews');
  
  if (!destinationsContainer) console.error('Container de destinos não encontrado!');
  if (!newsContainer) console.error('Container de notícias não encontrado!');
  
  return destinationsContainer && newsContainer;
}

// Carregar destinos em destaque
function loadFeaturedDestinations() {
  if (!checkElements()) return;
  
  const container = document.getElementById('featuredDestinations');
  container.innerHTML = featuredDestinations.map(destination => `
    <div class="destination-card">
      <img src="${destination.image}" alt="${destination.name}" 
           onerror="this.src='https://via.placeholder.com/400x300?text=${encodeURIComponent(destination.name)}'">
      <div class="destination-info">
        <h3>${destination.name}</h3>
        <p>${destination.description}</p>
        <span class="province-badge">${destination.province}</span>
        <a href="/destinations.html?id=${destination.id}" class="btn btn-primary">Ver mais</a>
      </div>
    </div>
  `).join('');
}

// Carregar últimas notícias
function loadLatestNews() {
  if (!checkElements()) return;
  
  const container = document.getElementById('latestNews');
  container.innerHTML = latestNews.map(news => `
    <div class="news-card">
      <img src="${news.image}" alt="${news.title}" 
           onerror="this.src='https://via.placeholder.com/600x400?text=${encodeURIComponent(news.title)}'">
      <div class="news-content">
        <span class="news-category">${news.category}</span>
        <h3>${news.title}</h3>
        <p>${news.excerpt}</p>
        <span class="news-date">${news.date}</span>
        <a href="/news.html?id=${news.id}" class="read-more">Ler mais →</a>
      </div>
    </div>
  `).join('');
}

// Inicialização segura
function initHomePage() {
  try {
    loadFeaturedDestinations();
    loadLatestNews();
  } catch (error) {
    console.error('Erro ao carregar conteúdo:', error);
    // Fallback visual
    document.getElementById('featuredDestinations').innerHTML = 
      '<p class="error-message">Destinos indisponíveis no momento</p>';
    document.getElementById('latestNews').innerHTML = 
      '<p class="error-message">Notícias indisponíveis no momento</p>';
  }
}

// Aguarda o DOM estar pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHomePage);
} else {
  initHomePage();
}