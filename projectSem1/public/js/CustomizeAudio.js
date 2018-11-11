var activeSong;

function play(id) {

    activeSong = document.getElementById(id);

    activeSong.play();

    //Calculates the starting percentage of the song.
    var percentageOfVolume = activeSong.volume / 1;
    var percentageOfVolumeMeter = document.getElementById('volumeMeter').offsetWidth * percentageOfVolume;

    //Fills out the volume status bar.
    document.getElementById('volumeStatus').style.width = Math.round(percentageOfVolumeSlider) + "px";
}

//Pauses the active song.
function pause() {
    activeSong.pause();
}

//Does a switch of the play/pause with one button.
function playPause(id) {
    //Sets the active song since one of the functions could be play.
    activeSong = document.getElementById(id);
    //Checks to see if the song is paused, if it is, play it from where it left off otherwise pause it.
    if (activeSong.paused) {
        activeSong.play();
        $('#songPlayPause').html('<i class="fa fa-pause" aria-hidden="true"></i>');
    } else {
        activeSong.pause();
        $('#songPlayPause').html('<i class="fa fa-play" aria-hidden="true"></i>');
    }
}

//Updates the current time function so it reflects where the user is in the song.
//This function is called whenever the time is updated.  This keeps the visual in sync with the actual time.
function updateTime() {
    var currentSeconds = (Math.floor(activeSong.currentTime % 60) < 10 ? '0' : '') + Math.floor(activeSong.currentTime % 60);
    var currentMinutes = Math.floor(activeSong.currentTime / 60);
    //Sets the current song location compared to the song duration.
    document.getElementById('songTime').innerHTML = currentMinutes + ":" + currentSeconds + ' / ' + Math.floor(activeSong.duration / 60) + ":" + (Math.floor(activeSong.duration % 60) < 10 ? '0' : '') + Math.floor(activeSong.duration % 60);

    //Fills out the slider with the appropriate position.
    var percentageOfSong = (activeSong.currentTime / activeSong.duration);
    var percentageOfSlider = document.getElementById('songSlider').offsetWidth * percentageOfSong;

    //Updates the track progress div.
    document.getElementById('trackProgress').style.width = Math.round(percentageOfSlider) + "px";
}

function volumeUpdate(number) {
    //Updates the volume of the track to a certain number.
    activeSong.volume = number / 100;
}

//Changes the volume up or down a specific number
function changeVolume(number, direction) {
    //Checks to see if the volume is at zero, if so it doesn't go any further.
    if (activeSong.volume >= 0 && direction == "down") {
        activeSong.volume = activeSong.volume - (number / 100);
    }
    //Checks to see if the volume is at one, if so it doesn't go any higher.
    if (activeSong.volume <= 1 && direction == "up") {
        activeSong.volume = activeSong.volume + (number / 100);
    }

    //Finds the percentage of the volume and sets the volume meter accordingly.
    var percentageOfVolume = activeSong.volume / 1;
    var percentageOfVolumeSlider = document.getElementById('volumeMeter').offsetWidth * percentageOfVolume;

    document.getElementById('volumeStatus').style.width = Math.round(percentageOfVolumeSlider) + "px";
}

//Sets the location of the song based off of the percentage of the slider clicked.
function setLocation(percentage) {
    activeSong.currentTime = activeSong.duration * percentage;
}


function setSongPosition(obj, e) {
    //Gets the offset from the left so it gets the exact location.
    var songSliderWidth = obj.offsetWidth;
    var evtobj = window.event ? event : e;
    clickLocation = evtobj.layerX - obj.offsetLeft;

    var percentage = (clickLocation / songSliderWidth);
    //Sets the song location with the percentage.
    setLocation(percentage);
}

//Set's volume as a percentage of total volume based off of user click.
function setVolume(percentage) {
    activeSong.volume = percentage;

    var percentageOfVolume = activeSong.volume / 1;
    var percentageOfVolumeSlider = document.getElementById('volumeMeter').offsetWidth * percentageOfVolume;

    document.getElementById('volumeStatus').style.width = Math.round(percentageOfVolumeSlider) + "px";
}

//Set's new volume id based off of the click on the volume bar.
function setNewVolume(obj, e) {
    var volumeSliderWidth = obj.offsetWidth;
    var evtobj = window.event ? event : e;
    clickLocation = evtobj.layerX - obj.offsetLeft;

    var percentage = (clickLocation / volumeSliderWidth);
    setVolume(percentage);
}
