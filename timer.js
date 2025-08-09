let intervalId;

function updateDisplay(seconds) {
  const m = String(Math.floor(seconds / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');
  document.getElementById('timer-display').textContent = `${m}:${s}`;
}

document.getElementById('start-button').addEventListener('click', function() {
  const minutesInput = document.getElementById('minutes');
  const minutes = parseInt(minutesInput.value, 10);
  if (isNaN(minutes) || minutes < 1 || minutes > 60) {
    return;
  }
  let remaining = minutes * 60;
  updateDisplay(remaining);
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    remaining--;
    updateDisplay(remaining);
    if (remaining <= 0) {
      clearInterval(intervalId);
      alert('時間になりました');
    }
  }, 1000);
});
