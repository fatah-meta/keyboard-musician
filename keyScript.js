window.addEventListener('keydown', function (e){
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = this.document.querySelector(`.btn-music[data-key="${e.keyCode}"]`);
    if(!audio){
        return;
    }
    audio.currentTime = 0;
    audio.play();
    key.classList.toggle('playing');
})

function removeTransition(e){
    if(e.propertyName !== 'transform'){
        return;
    }
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.btn-music');
keys.forEach(key=>{
    key.addEventListener('transitionend', removeTransition)
});
let music = "🎻🎷🥁";
window.addEventListener('load', ()=>{
    alert('Hey Welcome, Press your keyboard keys to play music '+music);
})
