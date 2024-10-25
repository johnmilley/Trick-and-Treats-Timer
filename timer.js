let countdownTimer;
controls.style.display = "none"

function startCountdown(intervalMinutes) {
  const endTime = Date.now() + intervalMinutes * 60 * 1000;

  clearInterval(countdownTimer);

  countdownTimer = setInterval(() => {
    const timeRemaining = endTime - Date.now();
    
    // If time is up, reset the countdown
    if (timeRemaining <= 0) {
      clearInterval(countdownTimer);
      // startCountdown(intervalMinutes);
    } else {
      // Calculate minutes and seconds
      const minutes = Math.floor((timeRemaining / 1000) / 60);
      const seconds = Math.floor((timeRemaining / 1000) % 60);

      // Update timer display
      document.getElementById("timer").textContent = 
        `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
  }, 1000);
}

function updateInterval() {
  const intervalMinutes = parseInt(document.getElementById("interval").value, 10) || 15;
  startCountdown(intervalMinutes);
}


function toggleControls() {
    
    const controls = document.getElementById("controls");
    const toggleButton = document.getElementById("toggle-button");
    
    
    if (controls.style.display === "none") {
    controls.style.display = "block";
    toggleButton.textContent = "Hide Controls";
    } else {
    controls.style.display = "none";
    toggleButton.textContent = "Show Controls";
    }
}

updateInterval();
