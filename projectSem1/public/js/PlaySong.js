document.addEventListener('DOMContentLoaded', function (event) {
    loadMp3();
    loadCurrentSong();
});


function loadCurrentSong() {
    var song = localStorage.getItem('song');
    var songPaser = JSON.parse(song);
    document.getElementsByClassName('nameSong')[0].innerHTML = songPaser.name + '&nbsp;&ndash;&nbsp;  <span>' + songPaser.singer + ', ' + songPaser.author + '</span>';
    document.getElementsByClassName('author')[0].innerHTML = 'Sáng tác: <span>' + songPaser.author + '</span>';
    document.getElementsByClassName('img-playing')[0].src = songPaser.thumbnail;
    document.getElementsByClassName('titleName')[0].querySelector('h5').innerHTML = songPaser.name;
    document.getElementsByClassName('titleName')[0].querySelector('p').innerHTML = songPaser.singer + ', ' + songPaser.author;
    var audio = document.getElementById('audioSong');
    audio.src = songPaser.link;
    audio.play;
}


function loadMp3() {
    var MP3_API = 'https://2-dot-backup-server-003.appspot.com/_api/v2/songs/get-free-songs';
    var xhr = new XMLHttpRequest();
    xhr.open("GET", MP3_API, true);
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            // Parse kết quả trả về thành kiểu json.
            var responseJson = JSON.parse(this.responseText);
            var htmlContent = '';
            for (var i = 0; i < responseJson.length; i++) {
                if (responseJson[i].name == '1234') continue;
                htmlContent += '<div class="audioRe">' +
                    '<div class="boxImgRe">' +
                    '<img src="' + responseJson[i].thumbnail + '" alt="">' +
                    '</div>' +
                    '<div class="titleSongRe">' +
                    '<h5>' + responseJson[i].name + '</h5>' +
                    '<p>' + responseJson[i].singer + '</p>' +
                    '</div>' +
                    '</div>';
                if (i === 9) break;
            }
            console.log(responseJson);
            document.getElementsByClassName('listSongRelationship')[0].innerHTML = htmlContent;
        } else if (this.readyState === 4) {
            console.log("Fails");
        }
    };
    xhr.send();
};