function mostrarMensagem() {
    alert("Obrigado por visitar o site Agro Forte, Futuro Sustentável!");
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("Site carregado com sucesso!");
});
document.addEventListener("DOMContentLoaded", function () {
    const imagens = document.querySelectorAll("img");

    imagens.forEach(function (imagem) {
        imagem.addEventListener("click", function () {
            alert("Esta imagem representa práticas sustentáveis no agronegócio!");
        });
    });
});
