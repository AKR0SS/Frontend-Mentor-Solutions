function setTextOpacity(id) {
  const element = document.getElementById(id);
  const background = document.getElementById(id + '-background');

  if (getComputedStyle(background).opacity < .9) {
    background.style.opacity = .9;
  } else {
    background.style.opacity = 0;
  }

  if (getComputedStyle(element).opacity < 1) {
    element.style.opacity = 1;
  } else {
    element.style.opacity = 0;
  }
}