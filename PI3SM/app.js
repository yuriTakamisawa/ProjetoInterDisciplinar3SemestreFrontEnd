document.querySelector(".usuario .dropdown li:first-child a").addEventListener("click", function(event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click", function() {
    document.querySelector(".popup").classList.remove("active");
});

function toggleOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = overlay.style.display === 'none' || overlay.style.display === '' ? 'block' : 'none';
}