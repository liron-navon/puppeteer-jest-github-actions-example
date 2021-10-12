const btn = document.querySelector('#btn');
const counter = document.querySelector('#counter');

btn.addEventListener('click', () => {
    counter.innerHTML = +counter.textContent + 1;
});