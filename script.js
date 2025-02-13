let stars = document.getElementById('stars');
let meteorid = document.getElementById('meteorid');
let rocket = document.getElementById('rocket');
let text = document.getElementById('text');
let button = document.getElementById('button');
let foto = document.getElementById('foto');

window.addEventListener('scroll', function(){
    let value = this.window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    rocket.style.top = value * -0.5 + 'px';
    text.style.marginBottom = value * 1 + 'px';
    button.style.left = value * 1.5 + 'px';
    foto.style.marginTop = value * 1.5 + 'px';
});