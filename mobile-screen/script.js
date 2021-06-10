const imgs = document.getElementById("imgs");
const img = document.querySelectorAll("#imgs .cel-img");

let idx = 0;

let interval = setInterval(run, 3000);

function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }

  imgs.style.transform = `translateX(${-idx * 250}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 3000);
}

function run() {
  idx++;

  changeImage();
  resetInterval();
}

run();
