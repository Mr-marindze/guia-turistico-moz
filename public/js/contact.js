// Validar formulário
function setupContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Validação básica
      const name = form.querySelector('input[type="text"]').value.trim();
      const email = form.querySelector('input[type="email"]').value.trim();
      const message = form.querySelector('textarea').value.trim();
      
      if (!name || !email || !message) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }
      
      // Simular envio (substituir por AJAX/API real)
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      form.reset();
    });
  }
  
// Função para inicializar o mapa
function initMap() {
  // Coordenadas do local (ex: Maputo)
  const location = { lat: -25.969248, lng: 32.573174 };
  
  // Opções do mapa
  const mapOptions = {
      zoom: 15,
      center: location,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [
          {
              "featureType": "poi",
              "stylers": [{"visibility": "off"}]
          },
          {
              "featureType": "transit",
              "stylers": [{"visibility": "off"}]
          }
      ]
  };

  // Criar o mapa
  const map = new google.maps.Map(document.getElementById("contactMap"), mapOptions);

  // Adicionar marcador
  new google.maps.Marker({
      position: location,
      map: map,
      title: "Nosso Escritório",
      icon: {
          url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png"
      }
  });

  // Remover placeholder
  const placeholder = document.querySelector('.map-placeholder');
  if (placeholder) {
      placeholder.style.display = 'none';
  }
}

// Carregar a API do Google Maps
function loadGoogleMaps() {
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD7uNbeLLHYAOVW3skZqxCxgtrSwgBKG8U&callback=initMap`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  loadGoogleMaps();
  
  // Fallback se a API não carregar
  setTimeout(() => {
      if (!window.google || !window.google.maps) {
          const placeholder = document.querySelector('.map-placeholder');
          if (placeholder) {
              placeholder.innerHTML = '<i class="fas fa-exclamation-triangle"></i><p>Não foi possível carregar o mapa</p>';
          }
      }
  }, 5000);
});
  