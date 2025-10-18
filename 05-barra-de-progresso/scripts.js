const progressBar = document.querySelector(".progress");
const previousBtn = document.querySelector("#previous-btn");
const nextBtn = document.querySelector("#next-btn");

let progress = 0;

// FUNÇÃO PARA ATUALIZAR A BARRA DE PROGRESSO
function updateProgressBar() {
  progressBar.style.width = progress + "%"; // Atualiza a largura da barra de progresso
}

// FUNÇÕES PARA AVANÇAR E RETROCEDER A BARRA DE PROGRESSO
function previousStep() {
  progress -= 10;
  if (progress < 0) progress = 0;
  updateProgressBar();
}

function nextStep() {
  progress += 10;
  if (progress > 100) progress = 100;
  updateProgressBar();
}

previousBtn.addEventListener("click", previousStep);
nextBtn.addEventListener("click", nextStep);
