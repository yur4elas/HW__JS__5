let min = document.getElementById('minutes');
let sec = document.getElementById('sec');
let ms = document.getElementById('ms');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');

let countRound = 0;
let timerMS, timerSec, timerMin;

let i = 0, j = 0, k = 0;

start.addEventListener('click', () => {   
   msRun();
   secRun();
   minRun();
   start.style = "z-index:0";
});

reset.addEventListener('click', () => {
   start.style = "z-index:2";
   let rem = document.querySelectorAll('.rem');
   rem.forEach(elem => elem.remove());
   countRound = 0;

   if (timerMS) clearTimeout(timerMS);
   if (timerSec) clearTimeout(timerSec);
   if (timerMin) clearTimeout(timerMin);

   i = 0, j = 0, k = 0;
      
   min.innerText = "00"; 
   sec.innerText = "00"; 
   ms.innerText = "00";  

})


stop.addEventListener('click', () => {
   let round = document.querySelector('.round');
   let newSpanRound = document.createElement('span');
   newSpanRound.classList.add('rem');
   let timeRound = document.querySelector('.time-round');
   let newSpanTimeRound = document.createElement('span');
   newSpanTimeRound.classList.add('rem');
   countRound++;
   newSpanRound.innerText = countRound;
   round.appendChild(newSpanRound);
   newSpanTimeRound.innerText = `${min.innerText} : ${sec.innerText} . ${ms.innerText}`
   timeRound.appendChild(newSpanTimeRound);
})






function msRun() {
   ms.innerText = i;
   i++;
   timerMS = setTimeout(msRun, 10); //! <== проблема с правилным подсчетом (есть маленькая задержка)
   i === 100 ? i = 0 : void 0;
}

function secRun() {
   sec.innerText = j;
   j++;
   timerSec = setTimeout(secRun, 1000);
   j === 60 ? j = 0 : void 0;
}
function minRun() {
   min.innerText = k;
   k++;
   timerMin = setTimeout(minRun, 60000);
   k === 60 ? k = 0 : void 0;
}