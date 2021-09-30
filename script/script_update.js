function playDrums(e){
  const audio =document.querySelector(`audio[data-key ="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key= "${e.keyCode}"]`);
  if (!audio) return null;
  
  //calls on CSS animation
  //key.classList.add('playing');

  // Returns Audioclip to beginning
  audio.currentTime = 0;
  audio.play();
}
  //The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
window.addEventListener("keydown",playDrums);