let add = document.getElementById('increase');
let less = document.getElementById('decrease');

let int = document.getElementById('zero');
let integer = 0;


if(add){
  add.addEventListener('click', function() {
    integer += 1;
    int.innerHTML = integer;
  })};
  

if(less){
less.addEventListener('click', function() {
  integer -= 1;
  int.innerHTML = integer;
})};

