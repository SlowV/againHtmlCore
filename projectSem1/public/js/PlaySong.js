var SONG_DETAIL = 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs/detail';
$(document).ready(function () {
    var url = new URL(window.location.href);
    var id = url.searchParams.get("id");
    if (id == null || id.length == 0) {
        return;
    }
    loadMp3();
    loadCurrentSong(id);
});


function loadCurrentSong(id) {
    $.ajax({
        url: SONG_DETAIL + '?id=' + id,
        method: 'GET',
        success: function (res) {
            if(res.length == 0|| res == null){
                console.log('Bai hat khong ton tai');
            }
            $('title').html(res.name + '&nbsp;&ndash;&nbsp;' + res.author + ', ' + res.singer);
            $('meta[property="og:url"]').attr('content', location.href);
            $('meta[property="og:type"]').attr('content', 'Giai điệu cuộc sống');
            $('meta[property="og:title"]').attr('content', res.name);
            $('meta[property="og:description"]').attr('content', res.description);
            $('meta[property="og:image"]').attr('content', res.thumbnail);

            $('.box-song-play').html('<div class="nameSong">' + res.name + '&nbsp;&ndash;&nbsp;  <span>' + res.singer + '</span></div>' +
                '<div class="author">Sáng tác: <span>' + res.author + '</span></div>' +
                '<div class="song-play">' +
                '<div class="box-img">' +
                '<img src="https://gogobanana.net/images/pictures/7.jpg" alt="imgbackground">\n' +
                '</div>' +
                '<div class="contentSong">' +
                '<div class="imgSong" style="background: url(' + res.thumbnail + ') no-repeat 50% 50%; background-size: cover">' +
                '</div>' +
                '<div class="titleName">' +
                '<h5>' + res.name + '</h5>' +
                '<p>' + res.singer + '</p>' +
                '</div>' +
                '</div>' +
                '<div class="control-audio" >' +
                '<div id="songSlider" onclick="setSongPosition(this,event)">' +
                '<div id="trackProgress"></div>' +
                '</div>' +
                '<div class="btn-control">' +
                '<div id="songPlayPause" onclick="playPause(\'song\')">' +
                '<i class="fa fa-play" aria-hidden="true"></i>' +
                '</div>' +
                '<div id="songTime">0:00 / 0:00</div>' +
                '<div id="volumeUp" onclick="changeVolume(10, \'up\')">' +
                '<i class="fa fa-volume-up" aria-hidden="true"></i>' +
                '</div>' +
                '<div id="volumeDown" onclick="changeVolume(10, \'down\')">' +
                '<i class="fa fa-volume-down" aria-hidden="true"></i>' +
                '</div>' +
                '<div id="volumeMeter" onclick="setNewVolume(this,event)">' +
                '<div id="volumeStatus"></div>' +
                '</div>' +
                '</div>' +
                '<audio id="song" ontimeupdate="updateTime()" type="audio/mp3" loop preload="auto" prefix="" src="' + res.link + '">' +
                '</audio>' +
                '</div>' +
                '</div>' +
                '<div class="row">' +
                '<div class="group-btn-control-func">' +
                '<div class="fb-share-button" data-href="https://demo-app-html.herokuapp.com/projectSem1/playSong.html?id=' +res.id + '" data-layout="button" data-size="small" data-mobile-iframe="true"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://demo-app-html.herokuapp.com/projectSem1/playSong.html?id=' + res.id + ';src=sdkpreparse">Chia sẻ</a></div>'+
                '</div>' +
                '</div>'+
                '<div class="row">' +
                '<div class="description col-md-12" >' +
                res.description +
                '</div>' +
                '</div>');
            shareSong = res;
        },
        error: function (msg) {

        }
    });
}


function loadMp3() {
    var MP3_API = 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs';
    $.ajax({
        url: MP3_API,
        method: 'GET',
        success: function (res) {
            var htmlContent = '';
            for (var i = 0; i < res.length; i++) {
                if (res[i].name == '1234') continue;
                htmlContent += '<div class="audioRe" onclick="switchPlaySong(\'' + res[i].id + '\')">' +
                    '<div class="boxImgRe">' +
                    '<img src="' + res[i].thumbnail + '" alt="">' +
                    '</div>' +
                    '<div class="titleSongRe">' +
                    '<h5>' + res[i].name + '</h5>' +
                    '<p>' + res[i].singer + '</p>' +
                    '</div>' +
                    '</div>';
                if (i === 9) break;
            }
            $('.listSongRelationship').html(htmlContent);
        },
        error:function (msg) {
            console.log(msg);
        }
    });
}

function share(id, name, description, thumbnail) {
    if (currentSong == null) {
        return;
    }
    shareOverrideOGMeta('https://demo-app-html.herokuapp.com/projectSem1/playSong.html?id=' + shareSong.id, shareSong.name + ' || SlowV Music', shareSong.description, shareSong.thumbnail);
}

