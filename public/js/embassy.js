// Dados de embaixadas (substituir por dados oficiais)
const embassies = [
    {
      country: "Portugal",
      type: "Embaixada",
      address: "Av. Julius Nyerere, 720, Maputo",
      phone: "+258 21 491 248",
      email: "embaixada.portugal@mail.com"
    }
  ];
  
  // Configurar filtros
  function setupEmbassyFilters() {
    const countryFilter = document.getElementById('countryFilter');
    const typeFilter = document.getElementById('typeFilter');
    
    [countryFilter, typeFilter].forEach(filter => {
      filter.addEventListener('change', filterEmbassies);
    });
  }
  
  // Filtrar embaixadas
  function filterEmbassies() {
    const country = document.getElementById('countryFilter').value;
    const type = document.getElementById('typeFilter').value;
    
    const filtered = embassies.filter(embassy => {
      const matchesCountry = country === '' || embassy.country === country;
      const matchesType = type === '' || embassy.type === type;
      return matchesCountry && matchesType;
    });
    
    renderEmbassies(filtered);
  }
  
  // Renderizar embaixadas
  function renderEmbassies(embassyList) {
    const container = document.getElementById('embassyContainer');
    if (!container) return;
  
    container.innerHTML = embassyList.map(embassy => `
      <div class="embassy-item">
        <div class="embassy-header">
          <h3 class="embassy-country">${embassy.country}</h3>
          <span class="embassy-type">${embassy.type}</span>
        </div>
        <div class="embassy-details">
          <p class="embassy-address">
            <i class="fas fa-map-marker-alt"></i>
            ${embassy.address}
          </p>
          <p class="embassy-phone">
            <i class="fas fa-phone"></i>
            ${embassy.phone}
          </p>
          <p class="embassy-email">
            <i class="fas fa-envelope"></i>
            ${embassy.email}
          </p>
        </div>
      </div>
    `).join('');
  }
  
  // Inicializar
  document.addEventListener('DOMContentLoaded', () => {
    setupEmbassyFilters();
    renderEmbassies(embassies);
  });