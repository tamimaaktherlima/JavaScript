// Audio or Vidoe events
// canplay, play, playing, pause, volumechange.
//  for Downloading video--> use progess, waiting events.
const video = document.querySelector("video");

video.addEventListener('canplay', function(){
    console.log("canPlay");
});

video.addEventListener('play', function(){
    console.log("Play");
});

video.addEventListener('playing', function(){
    console.log("Playing");
});

video.addEventListener('pause', function(){
    console.log("Pause");
});

video.addEventListener('volumechange', function(){
    console.log("Volumechange");
});