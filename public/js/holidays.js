// Feriados Nacionais de Moçambique
const holidays = [
  {
    date: "1 de Janeiro",
    name: "Ano Novo",
    type: "Nacional",
    description: "Celebração do início do novo ano civil"
  },
  {
    date: "3 de Fevereiro",
    name: "Dia dos Heróis Moçambicanos",
    type: "Nacional",
    description: "Homenagem aos heróis nacionais que lutaram pela independência"
  },
  {
    date: "7 de Abril",
    name: "Dia da Mulher Moçambicana",
    type: "Nacional",
    description: "Celebração das conquistas das mulheres moçambicanas"
  },
  {
    date: "1 de Maio",
    name: "Dia do Trabalhador",
    type: "Nacional",
    description: "Celebração internacional dos trabalhadores"
  },
  {
    date: "25 de Junho",
    name: "Dia da Independência",
    type: "Nacional",
    description: "Comemoração da independência de Portugal em 1975"
  },
  {
    date: "7 de Setembro",
    name: "Dia dos Acordos de Lusaka",
    type: "Nacional",
    description: "Memorial do acordo que levou à independência"
  },
  {
    date: "25 de Setembro",
    name: "Dia das Forças Armadas",
    type: "Nacional",
    description: "Homenagem às Forças Armadas de Defesa de Moçambique"
  },
  {
    date: "4 de Outubro",
    name: "Dia da Paz e Reconciliação",
    type: "Nacional",
    description: "Celebração do acordo de paz que terminou a guerra civil"
  },
  {
    date: "25 de Dezembro",
    name: "Dia da Família",
    type: "Nacional",
    description: "Celebração da unidade familiar"
  }
];

// Função para renderizar os feriados
function renderHolidays() {
  const container = document.getElementById('holidaysList');
  if (!container) return;

  container.innerHTML = holidays.map(holiday => `
    <div class="holiday-item">
      <div class="holiday-date-box">
        <span class="holiday-date">${holiday.date}</span>
      </div>
      <div class="holiday-info">
        <h3 class="holiday-name">${holiday.name}</h3>
        <p class="holiday-description">${holiday.description}</p>
        <span class="holiday-type">${holiday.type}</span>
      </div>
    </div>
  `).join('');
}

// Inicializar
document.addEventListener('DOMContentLoaded', renderHolidays);