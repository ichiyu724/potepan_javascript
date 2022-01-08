/* global $*/

const timer = document.getElementById('timer');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

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

start.addEventListener('click', () => {
  $(function() {
    let startButton = $('#start').click(function() {
      $(this).prop('disabled', true);
    });
    if (startButton) {
    $('#stop').prop('disabled', false);
    $('#reset').prop('disabled', false);
  }
  });
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

/*start.onclick = function() {
  $(function() {
    let startButton = $('#start').click(function() {
      $(this).prop('disabled', true);
    });
    if (startButton) {
    $('#stop').prop('disabled', false);
    $('#reset').prop('disabled', false);
  }
  });
};*/
stop.addEventListener('click', () => {
  $(function() {
    let stopButton = $('#stop').click(function() {
      $(this).prop('disabled', true);
    });
    if (stopButton) {
    $('#start').prop('disabled', false);
    $('#reset').prop('disabled', false);
  }
  });
  clearInterval(intervalId);
  intervalId = null;
});

/*stop.onclick = function() { $(function() {
    let stopButton = $('#stop').click(function() {
      $(this).prop('disabled', true);
    });
    if (stopButton) {
    $('#start').prop('disabled', false);
    $('#reset').prop('disabled', false);
  }
  });
};*/  
  
reset.addEventListener('click', () => {
  elapsed = 0;
  updateTime();
  $(function() {
    let resetButton = $('#reset').click(function() {
      $(this).prop('disabled', true);
    });
  });
});
