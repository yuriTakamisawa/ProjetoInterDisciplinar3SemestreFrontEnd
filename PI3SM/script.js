const carousel = document.querySelector(".carrosel .container");
const images = document.querySelectorAll(".carrosel .container img");

let idx = 0;
const imageWidth = 1345; // Largura de cada imagem
const intervalTime = 4500; // Intervalo de tempo em milissegundos (3 segundos)

function carrossel() {
    idx++;

    if (idx >= images.length) {
        idx = 0;
    }

    carousel.style.transform = `translateX(${-idx * imageWidth}px)`;
}

setInterval(carrossel, intervalTime);


