let billAmount = document.getElementById("Amount");
let guests = document.getElementById("guests");
let tipAmount = document.getElementById("tipAmount");
let billA = 0;
let guestsA = 0;
let tipA = 0;

function calculateTip(){
  billA += billAmount.value;
  guestsA += guests.value;
  tipA += tipAmount.value;
  alert('R' + ' ' + (Number(billA) * (Number(tipA) / 100) / Number(guestsA)).toFixed(2) + ' per guest');
}