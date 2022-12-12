let art = document.querySelector('.art');
let btn = document.querySelector('.btn');
let wrapper = document.querySelector('.wrapper');

art.onclick = function () {
   console.log('Happy Birthday!');
   art.classList.toggle('art_pressed');
}

btn.onclick = function () {
   console.log('Happy Birthday!');
   wrapper.classList.toggle('wrapper_none');
}