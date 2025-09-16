function startCountdown(duration, display) {
  let timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = "00:" + minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

window.onload = function () {
  let fifteenMinutes = 60 * 15,
      display = document.querySelector('#timer');
  startCountdown(fifteenMinutes, display);

  // falling hazard icons (radiation symbols)
  const falling = document.getElementById('falling');
  const iconCount = 20;

  for (let i = 0; i < iconCount; i++) {
    let icon = document.createElement("div");
    icon.textContent = "☢";
    icon.className = "icon";
    icon.style.left = Math.random() * 100 + "vw";
    icon.style.fontSize = (20 + Math.random()*20) + "px";
    icon.style.animationDuration = 3 + Math.random() * 5 + "s";
    icon.style.animationDelay = Math.random() * 5 + "s";
    falling.appendChild(icon);
  }
};