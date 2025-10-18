const form = document.querySelector("form");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const assunto = document.querySelector("#assunto");
const mensagem = document.querySelector("#mensagem");
const charCounter = document.querySelector("#charCounter");
const warningMessage = document.querySelector("#warningMessage");
const errorMessages = document.querySelectorAll(".error-message");

// EVENTO DE ENVIO DO FORMULÁRIO
form.addEventListener("submit", function (event) {
  event.preventDefault();
  resetErrors();
  validateInputs();
});

// EVENTO DE CONTAGEM DE CARACTERES NA MENSAGEM
mensagem.addEventListener("input", () => {
  const length = mensagem.value.length;
	const maxLength = mensagem.getAttribute("maxlength");
  charCounter.textContent = `${length}/${maxLength}`;
  // Adiciona cor de alerta quando atingir o limite
  if (length >= maxLength) {
    charCounter.classList.add("limit-reached");
		warningMessage.style.display = "block";
  } else {
    charCounter.classList.remove("limit-reached");
		warningMessage.style.display = "none";
  }
});

function resetErrors() {
  errorMessages.forEach((errorMessage) => {
    errorMessage.innerText = "";
  });
  nome.parentElement.classList.remove("error");
  email.parentElement.classList.remove("error");
  assunto.parentElement.classList.remove("error");
  mensagem.parentElement.classList.remove("error");
}

function validateInputs() {
	// remover espaços em branco das extremidades
  const nomeValue = nome.value.trim();
  const emailValue = email.value.trim();
  const assuntoValue = assunto.value.trim();
  const mensagemValue = mensagem.value.trim();

  if (nomeValue === "") {
    setError(nome, "Nome não pode ficar em branco");
  }

  if (emailValue === "") {
    setError(email, "E-mail não pode ficar em branco");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "E-mail inválido");
  }

  if (assuntoValue === "") {
    setError(assunto, "Assunto não pode ficar em branco");
  }

  if (mensagemValue === "") {
    setError(mensagem, "Mensagem não pode ficar em branco");
  }
}

function setError(input, errorMessage) {
  const errorMessageElement = input.nextElementSibling;	// selecionar o elemento de mensagem de erro que é o próximo irmão do input
  errorMessageElement.innerText = errorMessage; // definir o texto da mensagem de erro
  input.parentElement.classList.add("error"); 	// adicionar a classe de erro ao elemento pai do input
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
