let seconds = document.getElementById("seconds");
let milli = document.getElementById("mili");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let d = new Date();
let second = d.getSeconds();
let mil = d.getMilliseconds();

// reset button
function resett() {
  let sec = (seconds.innerHTML = "00");
  let mil = (milli.innerHTML = "00");
  console.log(`${sec} --- ${mil}`);
}

reset.addEventListener("click", resett);

function startt() {
  let second = d.getSeconds();
  let mil = d.getMilliseconds();
  seconds.innerText = second;
  milli.innerText = mil;
  console.log(seconds, milli);
}

start.addEventListener("click", startt);
