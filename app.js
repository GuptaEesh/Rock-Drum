window.addEventListener("keydown",play);
function play(e){
    var audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    if(!audio)return;
    audio.currentTime=0;
    audio.play();
    key.classList.add('play');

}
function remove(e){
    this.classList.remove('play');
}
var keys=document.querySelectorAll(".key");
for(var i=0;i<keys.length;i++ ){
    keys[i].addEventListener('transitionend',remove);
}