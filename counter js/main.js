"use strict";
let increaseValue = 1; 
let count = 0;  


let btnHandler = (event) => {
  event.target.name === "increase" ?
  count+=increaseValue:
  count-=increaseValue;

  result.textContent = count;
};


let checkHandler = (event) => {
  let labelText = "";
  
  if(event.target.checked){
    increaseValue = 10;
    labelText = "Ritorna a -1 / +1";
  } else {
    increaseValue = 1;
    labelText = "Trasforma in -10 / +10"; 
  }
  
  
  buttonList.forEach(btn => {
      btn.name === "increase" ?
      btn.textContent = `+${increaseValue}` :
      btn.textContent = `-${increaseValue}`  
    });
  
  label.textContent = labelText; 
}

const buttonList = document.querySelectorAll("button");
const result = document.querySelector("span");
const label = document.querySelector("label");
const checkBox = document.querySelector("input");

buttonList.forEach((btn) => {
  btn.addEventListener("click", btnHandler)});

checkBox.addEventListener("change", checkHandler);

