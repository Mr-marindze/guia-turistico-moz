// Dados da equipe (substituir por dados reais)
const teamMembers = [
    {
      name: "Aldo Ruben",
      position: "Diretor",
      /*image: "/images/team/member1.jpg"*/
    },
    {
      name: "Isa Chiconela",
      position: "Pesquisadora",
      /*image: "/images/team/member2.jpg"*/
    }
  ];
  
  // Renderizar equipe
  function renderTeam() {
    const container = document.getElementById('teamMembers');
    if (!container) return;
  
    container.innerHTML = teamMembers.map(member => `
      <div class="team-member">
        <img src="${member.image}" alt="${member.name}" loading="lazy">
        <h4>${member.name}</h4>
        <p>${member.position}</p>
      </div>
    `).join('');
  }
  
  // Inicializar
  document.addEventListener('DOMContentLoaded', renderTeam);