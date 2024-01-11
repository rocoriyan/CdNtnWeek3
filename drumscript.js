const drumItems = [
    'boom',
    'clap',
    'hihat',
    'kick',
    'openhat',
    'ride',
    'snare',
    'tink',
    'tom'
];

const drumItemElements = drumItems.map(item => document.getElementById(item));
const soundElements = drumItems.map(sound => new Audio(`sounds/${sound}.wav `));

for(let itemIndex = 0; itemIndex < 9; itemIndex++){
    drumItemElements[itemIndex].addEventListener('click', function () {
        playSound(itemIndex);
    });
};

function playSound(drumPart){
    let audio = soundElements[drumPart];
    audio.play();
};

document.addEventListener('keypress', (keyClick) => {
    if(keyClick.code.includes("Digit") && keyClick.code !== "Digit0"){
        let soundIndex = parseInt(keyClick.key) - 1;
        playSound(soundIndex);
    };
});