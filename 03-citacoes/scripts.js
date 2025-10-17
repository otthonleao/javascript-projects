const quoteBtn = document.getElementById("quoteBtn");
const quoteText = document.querySelector(".quote .text");
const quoteAuthor = document.querySelector(".quote .author");

function getQuote() {
  const index = Math.floor(Math.random() * quotes.length); // Gera um índice aleatório baseado no tamanho do array
  quoteText.textContent = quotes[index].quote; // Define o texto da citação
  quoteAuthor.textContent = "- " + quotes[index].author; 	// Define o autor da citação
}

// Adiciona um evento de clique ao botão para gerar uma nova citação
quoteBtn.addEventListener("click", getQuote);

// SIMULANDO O ARRAY QUE VEM DO DATABASE OU DE UMA API
const quotes = [
  {
    quote: "Programar é transformar café em código.",
    author: "Autor desconhecido",
  },
  {
    quote: "Qualquer tolo pode escrever código que um computador entende. Bons programadores escrevem código que humanos entendem.",
    author: "Martin Fowler",
  },
  {
    quote: "Primeiro, resolva o problema. Depois, escreva o código.",
    author: "John Johnson",
  },
  {
    quote: "Falar é fácil. Mostre-me o código.",
    author: "Linus Torvalds",
  },
  {
    quote: "Simplicidade é a sofisticação máxima.",
    author: "Leonardo da Vinci (aplicada ao design de software)",
  },
  {
    quote: "O código limpo sempre parece ter sido escrito por alguém que se importa.",
    author: "Robert C. Martin (Uncle Bob)",
  },
  {
    quote: "Um bom arquiteto de software é alguém que prevê o caos — e o evita.",
    author: "Grady Booch",
  },
  {
    quote: "A primeira regra de qualquer tecnologia é que o que é automatizado deve funcionar corretamente.",
    author: "Elon Musk",
  },
  {
    quote: "Otimização prematura é a raiz de todos os males.",
    author: "Donald Knuth",
  },
  {
    quote: "A arte da programação é organizar a complexidade, não eliminá-la.",
    author: "Edsger W. Dijkstra",
  },
  {
    quote: "A arquitetura de software é sobre fazer boas escolhas cedo, para não sofrer tarde.",
    author: "Autor desconhecido",
  },
  {
    quote: "Um algoritmo deve ser visto como poesia — elegante, claro e com propósito.",
    author: "Donald Knuth",
  },
  {
    quote: "Java não é apenas uma linguagem, é uma filosofia de portabilidade e robustez.",
    author: "James Gosling",
  },
  {
    quote: "Não cometa o erro de otimizar antes de entender o problema.",
    author: "Brian Kernighan",
  },
  {
    quote: "Testes não são sobre encontrar erros, mas sobre prevenir catástrofes.",
    author: "Kent Beck",
  },
  {
    quote: "O código é como humor: quando você precisa explicá-lo, ele não é bom.",
    author: "Cory House",
  },
  {
    quote: "A boa arquitetura não é visível — ela apenas funciona.",
    author: "Grady Booch",
  },
  {
    quote: "Debugar é como ser um detetive em um filme onde você também é o assassino.",
    author: "Filipe Fortes",
  },
  {
    quote: "O melhor código é aquele que você não precisou escrever.",
    author: "Jeff Atwood",
  },
  {
    quote: "Em software, a complexidade não é um bug — é um convite à refatoração.",
    author: "Autor desconhecido",
  },
];
