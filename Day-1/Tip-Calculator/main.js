const btncalculate = document.getElementById("calculate");
const billinput = document.getElementById("bill");
const tipinput = document.getElementById("tip");
const peopleinput = document.getElementById("people");
const totalspan = document.getElementById("total");

function totaltip() {
  const billvalue = billinput.value;
  const tipvalue = tipinput.value;
  const peoplevalue = peopleinput.value;
  const totalValue = ((billvalue * (1 + tipvalue)) / 100);
  console.log(totalValue);
  totalspan.innerText = totalValue;
}

btncalculate.addEventListener("click", totaltip);
