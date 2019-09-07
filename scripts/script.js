let vid;
let playButton;




document.addEventListener('DOMContentLoaded', loaded);


//event listeners

function loaded()
{
    referenceDOMS();
    registerEvents();
}


function referenceDOMS()
{
    vid               = document.getElementById("vid");
    playButton        = document.getElementById("play");
    pausePlay         = document.getElementById("pause-play");
    fullscreen        = document.getElementById("fullscreen");
    videoControls     = document.getElementsByClassName("video-controls")[0];
    playButtonOverlay = document.getElementsByClassName("play-button")[0];
    progressBar       = document.getElementById('progress-bar');
    progressBarFiller = document.getElementById('progress-bar-filler');
}

function registerEvents()
{
    playButton.addEventListener("click",playVideo);
    fullscreen.addEventListener("click",openFullscreen);
    pausePlay.addEventListener("click",pauseVideo);
    vid.addEventListener('timeupdate', updateProgressBar, false);
}

function playVideo()
{
    vid.play();
    playButtonOverlay.style.opacity = 0;
    videoControls.style.display = 'flex';
    videoControls.style.opacity     = 1;
    setTimeout(()=>{
        playButtonOverlay.style.display = 'none';
    },800)

}

function pauseVideo()
{
    vid.pause();
    videoControls.style.opacity     = 0;
    playButtonOverlay.style.display = 'flex';
    playButtonOverlay.style.opacity = 1;
    setTimeout(()=>{
        videoControls.style.display = 'none';
    },800)
}

function updateProgressBar() {
    progressBar = document.getElementById('progress-bar');
    var percentage = Math.floor((100 / vid.duration) *
    vid.currentTime);
    progressBarFiller.style.width = percentage + '%';
    
 }

 function openFullscreen() {
    if (vid.requestFullscreen) {
        vid.requestFullscreen();
    } else if (vid.mozRequestFullScreen) { /* Firefox */
        vid.mozRequestFullScreen();
    } else if (vid.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        vid.webkitRequestFullscreen();
    } else if (vid.msRequestFullscreen) { /* IE/Edge */
        vid.msRequestFullscreen();
    }
  }