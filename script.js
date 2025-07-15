// script.js

document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // Obter o id do link clicado
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    // Rolar suavemente até a seção correspondente
    window.scrollTo({
      top: targetElement.offsetTop - 50,  // Ajuste para considerar a navbar fixa
      behavior: 'smooth'
    });
  });
});
