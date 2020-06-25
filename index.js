const root = document.documentElement;
const btnColorChange = document.getElementById('btn--color-change');
const btnSimple = document.getElementById('btn--simple');
const btnHex = document.getElementById('btn--hex');
const colorValue = document.getElementById('color-value');

const simpleColors = ['rgba(133,122,200)', '#F15025', 'red', 'green', '#c7e8ff'];

let simple = true;

btnSimple.addEventListener('click', () => {
  simple = true;
});

btnHex.addEventListener('click', () => {
  simple = false;
});

btnColorChange.addEventListener('click', () => {
  let bgColor = '#c7e8ff';
  if (simple) {
    // Get a random Index within the simpleColors array so that we can get a random color.
    let randomIndex = Math.floor(Math.random() * simpleColors.length);
    bgColor = simpleColors[randomIndex];
  } else {
    bgColor = getRandomColor();
  }
  
  if (tinycolor(bgColor).isDark()) {
    root.style.setProperty('--main-color', 'white');
  } else {
    root.style.setProperty('--main-color', 'black');
  }
  root.style.setProperty('--bg-color', bgColor);
  colorValue.textContent = bgColor;
});

// From https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

