const genrtBtn = document.querySelector("#generateBtn");
const hexValue = document.querySelector("#hexValue");
const copyCode = document.querySelector("#copyHexRow span");

const mainBg = document.querySelector(".swatch");
let value = "1234567890abcdefghijklmnopqrstuvwxyz";

const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const toast = document.getElementById('toast');
const copyBtn = document.getElementById('copyBtn');
const saveBtn = document.getElementById('saveBtn');

const moonPath = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
const sunPath = '<circle cx="12" cy="12" r="4.2" stroke="currentColor" stroke-width="1.8"/><path d="M12 2.5v2.2M12 19.3v2.2M4.2 4.2l1.5 1.5M18.3 18.3l1.5 1.5M2.5 12h2.2M19.3 12h2.2M4.2 19.8l1.5-1.5M18.3 5.7l1.5-1.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>';

function setTheme(light){
  root.classList.toggle('light', light);
  themeIcon.innerHTML = light ? sunPath : moonPath;
}

themeToggle.addEventListener('click', () => {
  setTheme(!root.classList.contains('light'));
});

setTheme(false);

genrtBtn.addEventListener("click",()=>{
    let color = hexValue.textContent = getRandomHexColor();
    mainBg.style.backgroundColor = color;
});

function getRandomHexColor() {
  const hexChars = '0123456789ABCDEF';
  let hex = '#';
  for (let i = 0; i < 6; i++) {
    hex += hexChars[Math.floor(Math.random() * hexChars.length)];
  }
  return hex;
}

function showToast(message){
  toast.textContent = message;
  toast.classList.add('show');

  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => {
    toast.classList.remove('show');
  }, 1600);
}

copyBtn.addEventListener('click', () => {
  const hex = hexValue.textContent;
  navigator.clipboard.writeText(hex)
    .then(() => showToast(hex + ' copied to clipboard'))
    .catch(() => showToast('Could not copy'));
});

saveBtn.addEventListener('click', () => {
  const hex = hexValue.textContent;
  showToast('Saved ' + hex);
});