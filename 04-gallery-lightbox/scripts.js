const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxClose = document.querySelector(".lightbox-close");

galleryItems.forEach((item) => { // Adiciona evento de clique a cada item da galeria
  item.addEventListener("click", () => { // Ao clicar, abre o lightbox com a imagem correspondente
    const imageUrl = item.querySelector(".gallery-image").getAttribute("data-src"); // Pega o URL da imagem em data-src
    lightboxImage.setAttribute("src", imageUrl); // Define o src da imagem do lightbox
    lightbox.style.display = "flex"; // Mostra o lightbox
  });
});

lightboxClose.addEventListener("click", () => { // Fecha o lightbox ao clicar no botão de fechar
  lightbox.style.display = "none"; // Esconde o lightbox
});
