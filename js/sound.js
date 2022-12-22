const audio = new Audio('./asset/music/tunetank.com_5072_inspire_by_creativemediass.mp3');
const btn = document.querySelector('#play');

btn.addEventListener('click', () => {
  audio.play();
});