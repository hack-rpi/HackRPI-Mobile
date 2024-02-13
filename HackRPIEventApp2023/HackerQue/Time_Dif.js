function formatTime(hours, minutes, seconds) {
    return `${hours}:${minutes}:${seconds}`;
  }
  
  // Function to calculate and return time difference
  function calculateTimeDifference(t) {
    // Function to update current time every second
    function updateCurrentTime() {
      currentTime.setTime(currentTime.getTime() + 1000);
    }
  
    // Create a Date object for the current time
    const currentTime = new Date();
  
    // Parse the input time string to create a Date object
    const targetTime = new Date(t);
  
    // Calculate the initial time difference in milliseconds
    let timeDifference = currentTime.getTime() - targetTime.getTime();
  
    // Convert the initial time difference to hours, minutes, and seconds
    let hours = Math.floor(timeDifference / (1000 * 60 * 60));
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
    // Update the current time every second and recalculate the time difference
    const intervalId = setInterval(() => {
      updateCurrentTime();
      timeDifference = currentTime.getTime() - targetTime.getTime();
      hours = Math.floor(timeDifference / (1000 * 60 * 60));
      minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    }, 1000);
  
    // Return an object with the hours, minutes, and seconds
    return formatTime(hours, minutes, seconds);
  }
  
  // Export the calculateTimeDifference function
  module.exports = calculateTimeDifference;