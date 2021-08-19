const playbtn = document.querySelector('#play');
const play = document.querySelector('.play')
const nextbtn = document.querySelector('#next');
const prevbtn = document.querySelector('#prev');
const audio = document.querySelector('#audio');
const title = document.querySelector('#title');
const album = document.querySelector('.album-img');
const progress = document.querySelector('.progress');
const playingNow = document.querySelector('.playsong')
const progress_bar = document.querySelector('.progress-bar');

// this is the songs Array
const songs = ['song1', 'song2', 'song3'];

// giving a difualt index of 2
let songIndex = 2;

// intialise songs 
loadSong(songs[songIndex])


// this function loads the songs info 
function loadSong(song) {
    title.innerText = song
    audio.src = `songs/${song}.mp3`
    album.src = `img/${song}.jpg`
}

// this function plays the song 
function playSong(){
    play.classList.add('playsong')
    audio.play()
}

// this function pauses the song
function pauseSong(){
    play.classList.remove('playsong')
    audio.pause()
}

// this button listens on a cliicks once it's clickes it will exicute the if statement
playbtn.addEventListener('click', () =>{
    // chicking if it's playing 
    const isPlaying = play.classList.contains('playsong')
    if(isPlaying){
        pauseSong()
    }else{
        playSong()
    }
})

// function to next the song 
function nextSong(){
    songIndex ++;
    if(songIndex > songs.length - 1){
        songIndex =0
    }
    loadSong(songs[songIndex])
    // add the playsong class once its on the next song
    play.classList.add('playsong')
    audio.play()  
}
// prev song 
function prevSong(){
    songIndex--
    if(songIndex < 0){
        songIndex = songs.length - 1
    }
    loadSong(songs[songIndex])
    // add the playsong class once its on the next song
    play.classList.add('playsong')
    audio.play()
}
// this function handles the progress bar 
function updateProgress(e){
    const {duration, currentTime} = (e.srcElement)
    const progressPecent = (currentTime / duration) * 100
    progress.style.width = `${progressPecent}%`
}

// this function forwards music onclick
function setProgress(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration
    audio.currentTime = (clickX / width)*duration
}
// listens to the next music button once its clicked it calls the nextSon() function
nextbtn.addEventListener('click', () =>{
    nextSong()
})
// listens to the prev music button once its clicked it calls the prevSon() function
prevbtn.addEventListener('click', ()=>{
    prevSong()
})
// listens to when the timeUpdate method once it notice and update it updates the progress bar by calling updateprogress()
audio.addEventListener('timeupdate', updateProgress)
// listens to the progressbar container once its clicked it gets the width and calls the function setProgress()
progress_bar.addEventListener('click', setProgress)
// this listens to the music once its ended it calls the function nextSong() more can be add to this function but for now you can add to it if you wish to
audio.addEventListener('ended', nextSong)


