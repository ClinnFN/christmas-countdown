function updateCountdown() {
    const christmas = new Date(new Date().getFullYear(), 11, 25);
    const now = new Date();
  
    if (now.getMonth() === 11 && now.getDate() > 25) {
      christmas.setFullYear(christmas.getFullYear() + 1);
    }
  
    const diff = christmas - now;
  
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
  
    document.getElementById("days").textContent = days.toString().padStart(2, "0");
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
  }
  
  setInterval(updateCountdown, 1000);
  updateCountdown();
  