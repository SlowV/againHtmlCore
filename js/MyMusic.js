
document.addEventListener('DOMContentLoaded', function (event) {
    loadMp3();
});

window.addEventListener('scroll', function () {
    var aMenu = document.getElementsByClassName('a-menu');
    var imgLogo = document.getElementById('img-logo');
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top == 0) {
        document.querySelector('nav').classList.remove('black');
        imgLogo.src = 'img/MyMusic/Logo.png';
        for (var i = 0; i < aMenu.length; i++) {
            aMenu[i].classList.remove('white');
        }
    } else {
        document.querySelector('nav').classList.add('black');
        imgLogo.src = 'img/MyMusic/Logo1.png';
        for (var i = 0; i < aMenu.length; i++) {
            aMenu[i].classList.add('white');
        }
    }

});

function loadMp3() {
    var MP3_API = "https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", MP3_API, true);
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            // Parse kết quả trả về thành kiểu json.
            var responseJson = JSON.parse(this.responseText);
            var htmlContent = "";
            for(var i = 0; i< responseJson.length;i++){
                htmlContent += '<div class="audio">'+
                    '<div class="box-img">'+
                    '<img src="' + responseJson[i].thumbnail + '" alt="IMG-MUSIC">'+
                    '</div>'+
                    '<div class="box-title">'+
                    '<div class="title">' + responseJson[i].name +'</div>'+
                    '</div>'+
                    '<div class="box-icon">'+
                    '<ul>'+
                    '<li><a id="pause' + responseJson[i].id + '" href="javascript:void(0)" onclick="pauseSong(this.id)" class="btn-pause hidden"><i class="fa fa-pause" aria-hidden="true"></i></a></li>' +
                    "<li><a href='javascript:void(0)' id=' "+ responseJson[i].id + "' onclick='playSong(\""+ responseJson[i].link +"\" , this.id)'>" +
                    '<i class="fa fa-play" aria-hidden="true"></i></a>' +
                    '</li>'+
                    '<li><a href="#"><i class="fa fa-plus" aria-hidden="true"></i></a></li>'+
                    '<li><a href="#"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i></a></li>'+
                    '</ul>'+
                    '</div>'+
                    '</div>'+
                    '<div style="clear: both"></div>'
            }
            document.getElementById('list-mp3').innerHTML = htmlContent;
        } else if (this.readyState === 4) {
            console.log("Fails");
        }
    };
    xhr.send();
};


function pauseSong(id) {
    var btnPause = document.getElementById(id);
    var btnPlay = btnPause.parentElement.nextElementSibling.firstChild;
    btnPlay.classList.remove('hidden');
    btnPause.classList.add('hidden');
    var mp3 = document.getElementById('audio-play');
    mp3.pause();
    var imgdefault = document.querySelector('.img-playing');
    if (imgdefault != null) {
        imgdefault.classList.remove('img-playing');
    }
    //Reset class div nếu tồn tại class="song-playing"
    var songdefault = document.querySelector('.song-playing');
    if (songdefault != null) {
        songdefault.classList.remove('song-playing');
    }

    var titledefault = document.querySelector('.title-playing');
    if (titledefault != null) {
        titledefault.classList.remove('title-playing');
    }
}

function playSong(link, id) {
    //Reset class img nếu tồn tại class="img-playing"
    var imgdefault = document.querySelector('.img-playing');
    if (imgdefault != null){
        imgdefault.classList.remove('img-playing');
    }
    //Reset class div nếu tồn tại class="song-playing"
    var songdefault = document.querySelector('.song-playing');
    if (songdefault != null) {
        songdefault.classList.remove('song-playing');
    }

    var titledefault = document.querySelector('.title-playing');
    if (titledefault != null) {
        titledefault.classList.remove('title-playing');
    }

    var btnPlayId = document.getElementById(id);
    var btnPause = btnPlayId.parentElement.parentElement.parentElement.firstChild.firstChild.firstChild;

    var img = btnPlayId.parentElement.parentElement.parentElement.parentElement.firstChild.firstChild;
    var title = btnPlayId.parentElement.parentElement.parentElement.parentElement.firstChild.nextElementSibling.firstChild;

    var divAudio = btnPlayId.parentElement.parentElement.parentElement.parentElement;
    img.classList.add('img-playing');
    divAudio.classList.add('song-playing');
    title.classList.add('title-playing');
    var mp3 = document.getElementById('audio-play');
    btnPause.classList.remove('hidden');
    btnPlayId.classList.add('hidden');
    mp3.src = link;
    mp3.play();
}