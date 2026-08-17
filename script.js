let timer;
let totalSeconds = 1500;
let isRunning = false;
let alarmTimeout;

const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const inputMin = document.getElementById('inputMin');
const inputSec = document.getElementById('inputSec');
const setBtn = document.getElementById('setBtn');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const audioFileInput = document.getElementById('audioFile');
const alarmSound = document.getElementById('alarmSound');
const stopAlarmBtn = document.getElementById('stopAlarmBtn');

function updateDisplay() {
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  minutesEl.textContent = String(mins).padStart(2, '0');
  secondsEl.textContent = String(secs).padStart(2, '0');
}

setBtn.addEventListener('click', () => {
  const mins = parseInt(inputMin.value) || 0;
  const secs = parseInt(inputSec.value) || 0;
  totalSeconds = (mins * 60) + secs;
  updateDisplay();
});

startBtn.addEventListener('click', () => {
  if (isRunning) return;
  isRunning = true;
  timer = setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
      updateDisplay();
    } else {
      clearInterval(timer);
      isRunning = false;
      triggerAlarm();
    }
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(timer);
  isRunning = false;
});

resetBtn.addEventListener('click', () => {
  clearInterval(timer);
  isRunning = false;
  totalSeconds = 1500;
  inputMin.value = 25;
  inputSec.value = 0;
  updateDisplay();
});

audioFileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    alarmSound.src = URL.createObjectURL(file);
  }
});

function triggerAlarm() {
  if (alarmSound.src) {
    alarmSound.play();
  }
  stopAlarmBtn.style.display = 'block';

  alarmTimeout = setTimeout(() => {
    stopAlarm();
  }, 10000);
}

function stopAlarm() {
  alarmSound.pause();
  alarmSound.currentTime = 0;
  stopAlarmBtn.style.display = 'none';
  clearTimeout(alarmTimeout);
}

stopAlarmBtn.addEventListener('click', stopAlarm);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
