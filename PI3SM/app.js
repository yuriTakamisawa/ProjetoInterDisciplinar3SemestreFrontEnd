document.querySelector(".usuario .dropdown li:first-child a").addEventListener("click", function(event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    const popup = document.querySelector(".popup");
    popup.classList.add("active");
    disablePage(popup); // Desabilita a página, afetando apenas o popup
});

document.querySelector(".popup .close-btn").addEventListener("click", function() {
    const popup = document.querySelector(".popup");
    popup.classList.remove("active");
    enablePage(popup); // Habilita a página
});

document.querySelector(".usuario .dropdown li:last-child a").addEventListener("click", function(event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    const popupCadastro = document.querySelector(".popup-cadastro");
    popupCadastro.classList.add("active");
    disablePage(popupCadastro); // Desabilita a página, afetando apenas o popup de cadastro
});

document.querySelector(".popup-cadastro .close-btn-cadastro").addEventListener("click", function() {
    const popupCadastro = document.querySelector(".popup-cadastro");
    popupCadastro.classList.remove("active");
    enablePage(popupCadastro); // Habilita a página
});

function disablePage(popup) {
    const body = document.querySelector('body');
    body.style.overflow = 'hidden'; // Impede a rolagem da página
    body.style.pointerEvents = 'none'; // Desabilita interações com a página, exceto no popup
    popup.style.pointerEvents = 'auto'; // Permite interações no popup
}

function enablePage(popup) {
    const body = document.querySelector('body');
    body.style.overflow = 'auto'; // Permite a rolagem da página
    body.style.pointerEvents = 'auto'; // Habilita interações com a página
    popup.style.pointerEvents = 'none'; // Bloqueia interações no popup quando ele está fechado
}



