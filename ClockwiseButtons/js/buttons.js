let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");

btn5.onclick = function() {
   let lastBtn = btn4.innerHTML
    btn4.innerHTML = btn7.innerHTML;
    btn7.innerHTML = btn8.innerHTML;
    btn8.innerHTML = btn9.innerHTML;
    btn9.innerHTML = btn6.innerHTML;
    btn6.innerHTML = btn3.innerHTML;
    btn3.innerHTML = btn2.innerHTML;
    btn2.innerHTML = btn1.innerHTML;
    btn1.innerHTML = lastBtn;
}

let btn21 = document.getElementById("btn21");
let btn22 = document.getElementById("btn22");
let btn23 = document.getElementById("btn23");
let btn24 = document.getElementById("btn24");
let btn25 = document.getElementById("btn25");
let btn26 = document.getElementById("btn26");
let btn27 = document.getElementById("btn27");
let btn28 = document.getElementById("btn28");
let btn29 = document.getElementById("btn29");

btn29.onclick = function() {
   let lastBtn = btn28.innerHTML
    btn28.innerHTML = btn27.innerHTML;
    btn27.innerHTML = btn26.innerHTML;
    btn26.innerHTML = btn25.innerHTML;
    btn25.innerHTML = btn24.innerHTML;
    btn24.innerHTML = btn23.innerHTML;
    btn23.innerHTML = btn22.innerHTML;
    btn22.innerHTML = btn21.innerHTML;
    btn21.innerHTML = lastBtn;
}