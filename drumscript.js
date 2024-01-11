let soundBoom = new Audio('sounds/boom.wav');
let soundClap = new Audio('sounds/clap.wav');
let soundHihat = new Audio('sounds/hihat.wav');
let soundKick = new Audio('sounds/kick.wav');
let soundOpenhat = new Audio('sounds/openhat.wav');
let soundRide = new Audio('sounds/ride.wav');
let soundSnare = new Audio('sounds/snare.wav');
let soundTink = new Audio('sounds/tink.wav');
let soundTom = new Audio('sounds/tom.wav');

let boom = document.getElementById('boom');
let clap = document.getElementById('clap');
let hihat = document.getElementById('hihat');
let kick = document.getElementById('kick');
let openhat = document.getElementById('openhat');
let ride = document.getElementById('ride');
let snare = document.getElementById('snare');
let tink = document.getElementById('tink');
let tom = document.getElementById('tom');

boom.addEventListener('click', (playBoom) => {
    soundBoom.play()
});

clap.addEventListener('click', (playClap) => {
    soundClap.play()
});

hihat.addEventListener('click', (playHihat) => {
    soundHihat.play()
});

kick.addEventListener('click', (playKick) => {
    soundKick.play()
});

openhat.addEventListener('click', (playOpenhat) => {
    soundOpenhat.play()
});

ride.addEventListener('click', (playRide) => {
    soundRide.play()
});

snare.addEventListener('click', (playSnare) => {
    soundSnare.play()
});

tink.addEventListener('click', (playTink) => {
    soundTink.play()
});

tom.addEventListener('click', (playTom) => {
    soundTom.play()
});