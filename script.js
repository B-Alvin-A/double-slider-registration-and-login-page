const regBtn = document.getElementById('register');
const lgnBtn = document.getElementById('login');
const container = document.getElementById('container');

regBtn.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

lgnBtn.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});