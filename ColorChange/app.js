const button = document.querySelector('button');
button.addEventListener('click', function() {
    document.body.style.backgroundColor = 'olive';
});

const h1 = document.querySelector('h1');

button.addEventListener('click', function() {
     const newColor = makeRandColor()
     document.body.style.backgroundColor = newColor;
     h1.innerText = newColor;
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}