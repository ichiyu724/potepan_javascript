/* global $*/

const timer = document.getElementById('timer');
const start = $('#start');
const stop = $('#stop');
const reset = $('#reset');

let elapsed = 0;
let intervalId = null;

function updateTime() {
　const ms = elapsed % 1000;
  const s = Math.floor(elapsed / 1000) % 60;
  const m = Math.floor(elapsed / 1000 / 60) % 60;
  const h = Math.floor(elapsed / 1000 / 60 / 60);
  
  const formattedMs = ms.toString().slice(0, 1);
  const formattedS = s.toString().padStart(1, '0');
  const formattedM = m.toString().padStart(1, '0');
  const formattedH = h.toString().padStart(1, '0');
  
  timer.innerHTML = `${formattedH}:${formattedM}:${formattedS}:${formattedMs}`;
}

start.click(function() {
  $(this).prop('disabled', true);
  stop.prop('disabled', false);
  reset.prop('disabled', false);
  if (intervalId !== null) {
    return;
  }
  
  let startMs = Date.now();
  
  intervalId = setInterval(() => {
    const nowMs = Date.now();
    elapsed += nowMs - startMs;
    startMs = nowMs;
    updateTime();
  }, 100);
});

stop.click(function() {
  $(this).prop('disabled', true);
  start.prop('disabled', false);
  reset.prop('disabled', false);
  clearInterval(intervalId);
  intervalId = null;
});

reset.click(function() {
  $(this).prop('disabled', true);
  start.prop('disabled', false);
  elapsed = 0;
  updateTime();
  });