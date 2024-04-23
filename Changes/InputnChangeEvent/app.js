const input = document.querySelector('input');
const h1 = document.querySelector('h1');

input.addEventListener('change', function(e) {
   h1.innerText = input.value;
})

// const input = document.querySelector('input');
// const h1 = document.querySelector('h1');

// input.addEventListener('input', function(e) {
//    if(input.value === ""){
//        h1.innerText = "Enter your user name";
//    } else {
//        h1.innerText = `Welcome, ${input.value}`;
//    }
// })