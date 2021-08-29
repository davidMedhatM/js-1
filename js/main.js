let ul = document.querySelector('ul');
let btn3 = document.querySelector('button');

btn3.onclick = function() {
    ul.classList.toggle('dis');
}



let btn1 = document.querySelectorAll('button')[1];
let div = document.querySelector('div');

btn1.onclick = function(){

    if (btn1.classList.contains('btn-dark')){
        div.style.backgroundColor = "black";
        div.style.color="white";
        btn1.innerText = "white mode";
        btn1.classList.add('btn-white');
        btn1.classList.remove('btn-dark')

    }else{
        div.style.backgroundColor = "white";
        div.style.color="black";
        btn1.innerText = "dark mode";
        btn1.classList.add('btn-dark');

    }

}



let h = document.querySelectorAll('input')[0];
let w = document.querySelectorAll('input')[1];
let color = document.querySelectorAll('input')[2];
let divcolor = document.querySelectorAll('div')[1];
let ch = document.querySelectorAll('button')[2];

ch.onclick = function() {
    x = h.value + 'px';
    y = w.value + 'px';
    z = color.value;

    divcolor.style.backgroundColor = z;
    divcolor.style.height = x;
    divcolor.style.width = y;

}