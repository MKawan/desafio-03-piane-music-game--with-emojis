const pianoKeys = document.querySelectorAll('.piano-keys .key');

let mapeKeys = [];

let audio = new Audio();

const keyCheck = document.querySelector('.keys-check input');

const volumeSlider = document.querySelector('.volume-slider input');

//criando sons do teclado tocando 
const playTune = (key) =>{
    audio.src = `src/sound/tunes/${key}.wav`
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add('active');
    setTimeout(() => {
        clickedKey.classList.remove('active')
    }, 150);
};

pianoKeys.forEach((key) => {
    key.addEventListener('click', () => playTune(key.dataset.key))
    mapeKeys.push(key.dataset.key);
})

//pegando teclas precionadas do teclado
document.addEventListener('keydown', (e) => {
    
    if(mapeKeys.includes(e.key)){
        playTune(e.key);
    }
});

//controle de volume
const handleVolume = (e) => {
    audio.volume = e.target.value;
};

volumeSlider.addEventListener('input', handleVolume);

//ligando e desligando as teclas
const showHiderKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle('hide'));
}

keyCheck.addEventListener('click', showHiderKeys);