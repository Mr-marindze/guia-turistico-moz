// Dados de exemplo (substituir por API real)
const allDestinations = [
  {
    id: 1,
    name: "Ilha de Moçambique",
    image: process.env.PUBLIC_URL + "/images/destinations/ilha-mozambique.jpg",
    description: "Patrimônio Mundial da UNESCO com arquitetura histórica",
    province: "Nampula",
    type: "Histórico"
  },
  {
    id: 2,
    name: "Praia do Tofo",
    image: process.env.PUBLIC_URL + "/images/destinations/tofo.jpg",
    description: "Paraíso para mergulho e observação de tubarões-baleia",
    province: "Inhambane",
    type: "Praia"
  }
];

// Filtros
function setupFilters() {
  const searchInput = document.getElementById('searchInput');
  const provinceFilter = document.getElementById('provinceFilter');
  
  if (searchInput && provinceFilter) {
    [searchInput, provinceFilter].forEach(element => {
      element.addEventListener('input', filterDestinations);
    });
  }
}

// Filtrar destinos
function filterDestinations() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const province = document.getElementById('provinceFilter').value;
  const container = document.getElementById('allDestinations');

  const filtered = allDestinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm) || 
                         destination.description.toLowerCase().includes(searchTerm);
    const matchesProvince = province === '' || destination.province === province;
    return matchesSearch && matchesProvince;
  });

  renderDestinations(filtered);
}

// Renderizar destinos
function renderDestinations(destinations) {
  const container = document.getElementById('allDestinations');
  if (!container) return;

  container.innerHTML = destinations.map(destination => `
    <div class="destination-item">
      <div class="destination-image">
        <img src="${destination.image}" alt="${destination.name}" loading="lazy">
        <span class="destination-badge">${destination.type}</span>
      </div>
      <div class="destination-details">
        <span class="destination-province">${destination.province}</span>
        <h3>${destination.name}</h3>
        <p class="destination-excerpt">${destination.description}</p>
        <a href="/destination-detail.html?id=${destination.id}" class="btn btn-outline">Ver detalhes</a>
      </div>
    </div>
  `).join('');
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
  setupFilters();
  renderDestinations(allDestinations);
  
  // Carregar destino específico se houver ID na URL
  const urlParams = new URLSearchParams(window.location.search);
  const destinationId = urlParams.get('id');
  if (destinationId) {
    // Implementar lógica para carregar detalhes do destino
  }
});