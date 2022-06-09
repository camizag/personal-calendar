let userInput = document.getElementsByClassName("form-control");
let addBtn = document.getElementsByClassName("add-btn");
let resetBtn = document.getElementById("reset-btn");

//Variables for buttons to save event
let add8 = document.getElementById("add8");
let add9 = document.getElementById("add9");
let add10 = document.getElementById("add10");
let add11 = document.getElementById("add11");
let add12 = document.getElementById("add12");
let add13 = document.getElementById("add13");
let add14 = document.getElementById("add14");
let add15 = document.getElementById("add15");
let add16 = document.getElementById("add16");
let add17 = document.getElementById("add17");
let add18 = document.getElementById("add18");
let add19 = document.getElementById("add19");
let add20 = document.getElementById("add20");
let add21 = document.getElementById("add21");
let add22 = document.getElementById("add22");

//Variables for the input the user enters at each time
let input8 = document.getElementById("input8");
let input9 = document.getElementById("input9");
let input10 = document.getElementById("input10");
let input11 = document.getElementById("input11");
let input12 = document.getElementById("input12");
let input13 = document.getElementById("input13");
let input14 = document.getElementById("input14");
let input15 = document.getElementById("input15");
let input16 = document.getElementById("input16");
let input17 = document.getElementById("input17");
let input18 = document.getElementById("input18");
let input19 = document.getElementById("input19");
let input20 = document.getElementById("input20");
let input21 = document.getElementById("input21");
let input22 = document.getElementById("input22");

//Eventlisteners to add the data to localstorage
add8.addEventListener("click", function() {
    localStorage.setItem("event8", input8.value);
});

add9.addEventListener("click", function() {
    localStorage.setItem("event9", input9.value);
});

add10.addEventListener("click", function() {
    localStorage.setItem("event10", input10.value);
});

add11.addEventListener("click", function() {
    localStorage.setItem("event11", input11.value);
});

add12.addEventListener("click", function() {
    localStorage.setItem("event12", input12.value);
});

add13.addEventListener("click", function() {
    localStorage.setItem("event13", input13.value);
});

add14.addEventListener("click", function() {
    localStorage.setItem("event14", input14.value);
});

add15.addEventListener("click", function() {
    localStorage.setItem("event15", input15.value);
});

add16.addEventListener("click", function() {
    localStorage.setItem("event16", input16.value);
});

add17.addEventListener("click", function() {
    localStorage.setItem("event17", input17.value);
});

add18.addEventListener("click", function() {
    localStorage.setItem("event18", input18.value);
});

add19.addEventListener("click", function() {
    localStorage.setItem("event19", input19.value);
});

add20.addEventListener("click", function() {
    localStorage.setItem("event20", input20.value);
});

add21.addEventListener("click", function() {
    localStorage.setItem("event21", input21.value);
});

add22.addEventListener("click", function() {
    localStorage.setItem("event22", input22.value);
});

//Eventlistener for the reset button
resetBtn.addEventListener("click", function() {
    localStorage.removeItem("event8");
    localStorage.removeItem("event9");
    localStorage.removeItem("event10");
    localStorage.removeItem("event11");
    localStorage.removeItem("event12");
    localStorage.removeItem("event13");
    localStorage.removeItem("event14");
    localStorage.removeItem("event15");
    localStorage.removeItem("event16");
    localStorage.removeItem("event17");
    localStorage.removeItem("event18");
    localStorage.removeItem("event19");
    localStorage.removeItem("event20");
    localStorage.removeItem("event21");
    localStorage.removeItem("event22");
});

//Get the items from localstorage
let displayEvent8 = localStorage.getItem("event8");
input8.val(displayEvent8);

let displayEvent9 = localStorage.getItem("event9");
input9.val(displayEvent9);

let displayEvent10 = localStorage.getItem("event10");
input10.val(displayEvent10);

let displayEvent11 = localStorage.getItem("event11");
input11.val(displayEvent11);

let displayEvent12 = localStorage.getItem("event12");
input12.val(displayEvent12);

let displayEvent13 = localStorage.getItem("event13");
input13.val(displayEvent13);

let displayEvent14 = localStorage.getItem("event14");
input14.val(displayEvent14);

let displayEvent15 = localStorage.getItem("event15");
input15.val(displayEvent15);

let displayEvent16 = localStorage.getItem("event16");
input16.val(displayEvent16);

let displayEvent17 = localStorage.getItem("event17");
input17.val(displayEvent17);

let displayEvent18 = localStorage.getItem("event18");
input18.val(displayEvent18);

let displayEvent19 = localStorage.getItem("event19");
input19.val(displayEvent19);

let displayEvent20 = localStorage.getItem("event20");
input20.val(displayEvent20);

let displayEvent21 = localStorage.getItem("event21");
input21.val(displayEvent21);

let displayEvent22 = localStorage.getItem("event22");
input22.val(displayEvent22);