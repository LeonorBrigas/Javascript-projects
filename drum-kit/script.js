function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return; // stop from running the function
  audio.currentTime = 0;
  audio.play(); // rewind to start
  key.classList.add('playing');
}

function removeTransition (e) {
  //if its not a transform it can be skipped
  if (e.propertyName !=='transform') return;
  //removes the class of playing once it has played
  this.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));

 //when key is pressed it runs playSound function
window.addEventListener("keydown",playSound);
