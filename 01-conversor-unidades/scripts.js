// SELECIONAR ELEMENTOS DO DOM
const inputElement = document.querySelector('#input');
const fromElement = document.querySelector('#from');
const toElement = document.querySelector('#to');
const convertBtn = document.querySelector('#convert-btn');
const outputElement = document.querySelector('#output');
const messageElement = document.querySelector('#message');

// FUNÇÃO PARA CONVERTER UNIDADES
function convert() {
	const fromValue = fromElement.value;
	const toValue = toElement.value;
	const inputValue = parseFloat(inputElement.value);

	// VERIFICAR SE O VALOR DE ENTRADA É VÁLIDO
	if (isNaN(inputValue)) {
		messageElement.textContent = 'Por favor, insira um número válido.';
		outputElement.value = '';
		return;
	}
	// VERIFICAR SE AS UNIDADES SÃO IGUAIS
	if (fromValue === toValue) {
		messageElement.textContent = 'As unidades de origem e destino são iguais.';
		outputElement.value = inputValue;
		return;
	}

	// CONVERTER A ENTRADA PARA METROS
	let valueInMeters;
	switch (fromValue) {
		case 'm':
			valueInMeters = inputValue;
			break;
		case 'km':
			valueInMeters = inputValue * 1000;
			break;
		case 'cm':
			valueInMeters = inputValue / 100;
			break;
		case 'mm':
			valueInMeters = inputValue / 1000;
			break;
		default:
			messageElement.textContent = 'Unidade de origem desconhecida.';
			outputElement.value = '';
			return;
	}

	// CONVERTER DE METROS PARA A UNIDADE DE SAÍDA
	let result;
	switch (toValue) {
		case 'm':
		 result = valueInMeters;
			break;
		case 'km':
		 result = valueInMeters / 1000;
			break;
		case 'cm':
		 result = valueInMeters * 100;
			break;
		case 'mm':
		 result = valueInMeters * 1000;
			break;
		default:
			messageElement.textContent = 'Unidade de destino desconhecida.';
			outputElement.value = '';
			return;
	}

	// EXIBIR O RESULTADO
	outputElement.value = result;

	// EXIBIR RESULTADO NA MENSAGEM
	const fromLabel = fromElement.options[fromElement.selectedIndex].text; // Pega o texto da opção selecionada
	const toLabel = toElement.options[toElement.selectedIndex].text;
	messageElement.textContent = `${inputValue} ${fromLabel} equivalem a ${result} ${toLabel}.`;

	return;
}

convertBtn.addEventListener('click', convert);
