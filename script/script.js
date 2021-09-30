document.addEventListener('keydown', (event)=>{
  if(event.key ==='k'){l
    playSnare();
  }else if(event.key ==='j'){
    playKick();
  } else if(event.key ==='f'){
    playHiTom();
  }else if(event.key==='d'){
    playMidTom();
  }else if(event.key==='s'){
    playLowTom();
  }else if(event.key==='a'){
    playRide();
  }else if(event.key=='l'){
    playHiHat();
  }
});



//The Id's refer to the audio loaded into the HTML
// load reloads the audio after .play so the wave doesn't have to play completely each time it's triggered
function playSnare () {
  document.getElementById('snare').load();
  document.getElementById('snare').play();
}
function playKick(){
  document.getElementById('kick').load();
  document.getElementById('kick').play();
  
}
function playHiTom(){
  document.getElementById('h-tom').load();
  document.getElementById('h-tom').play();
  
}
function playMidTom(){
  document.getElementById('mid-tom').load();
  document.getElementById('mid-tom').play();
  
}
function playLowTom(){
  document.getElementById('l-tom').load();
  document.getElementById('l-tom').play();
  
}
function playLowTom(){
  document.getElementById('l-tom').load();
  document.getElementById('l-tom').play();
  
}
function playRide(){
  document.getElementById('ride').load();
  document.getElementById('ride').play();
}
function playHiHat(){
  document.getElementById('hi-hat').load();
  document.getElementById('hi-hat').play();
}



