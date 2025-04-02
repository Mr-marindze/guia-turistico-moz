// news.js - JavaScript específico para esta página
// Dados de exemplo (substituir por API real)
const allNews = [
  {
    id: 1,
    title: "Moçambique entre os melhores destinos para 2025",
    image: process.env.PUBLIC_URL + "images/news/noticia1.jpg", // Caminho corrigido
    date: "15 Out 2023",
    excerpt: "Revista internacional destaca as praias do arquipélago do Bazaruto",
    category: "Destaque",
    content: "Conteúdo completo da notícia..."
  }
];
  
  // Filtros por categoria
  function setupNewsFilters() {
    const filterButtons = document.querySelectorAll('.news-categories button');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        filterNews(button.textContent);
      });
    });
  }
  
  // Filtrar notícias
  function filterNews(category) {
    const filtered = category === 'Todas' ? 
      allNews : 
      allNews.filter(news => news.category === category);
    
    renderNews(filtered);
  }
  
  // Renderizar notícias
  function renderNews(newsItems) {
    const container = document.getElementById('newsContainer');
    if (!container) return;
  
    container.innerHTML = newsItems.map(news => `
      <div class="news-item">
        <div class="news-image">
          <img src="${news.image}" alt="${news.title}" loading="lazy">
          <span class="news-date">${news.date}</span>
        </div>
        <div class="news-content">
          <span class="news-category">${news.category}</span>
          <h3>${news.title}</h3>
          <p class="news-excerpt">${news.excerpt}</p>
          <a href="/news-detail.html?id=${news.id}" class="read-more">Ler mais →</a>
        </div>
      </div>
    `).join('');
  }
  
  // Inicializar
  document.addEventListener('DOMContentLoaded', () => {
    setupNewsFilters();
    renderNews(allNews);
    
    // Carregar notícia específica se houver ID na URL
    const urlParams = new URLSearchParams(window.location.search);
    const newsId = urlParams.get('id');
    if (newsId) {
      // Implementar lógica para carregar notícia completa
    }
  });