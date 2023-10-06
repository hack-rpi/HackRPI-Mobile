// Get the current time
function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes} ${hours >= 12 ? 'PM' : 'AM'}`;

  // Update the time inside the circle
  const timeElement = document.querySelector('.time');
  timeElement.textContent = timeString;
}

// Update time every second
setInterval(updateTime, 1000);

// Initial time update
updateTime();
