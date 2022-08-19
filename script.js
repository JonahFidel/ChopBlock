const {Howl, Howler} = require('howler');

var sound = new Howl({
    src: ['seeing-green.mp3'],
    autoplay: true
});

// // Clear listener after first call.
// sound.once('load', function(){
//     sound.play();
// });

// // Fires when the sound finishes playing.
// sound.on('end', function(){
//     console.log('Finished!');
// });

// window.onload = event => {
    
//     console.log('page is fully loaded');
// };

document.addEventListener("DOMContentLoaded", () => {
    sound.play();
})
