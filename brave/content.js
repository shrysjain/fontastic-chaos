function randomFontSize() {
  return Math.floor(Math.random() * 50) + 'px';
}

function applyRandomFontSize() {
  const elements = document.querySelectorAll('*');
  elements.forEach(element => {
    element.style.fontSize = randomFontSize();
  });
}

applyRandomFontSize();
