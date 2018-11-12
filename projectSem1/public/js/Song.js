document.addEventListener('DOMContentLoaded', function (event) {
    loadMp3();

});

function loadMp3() {
    var MP3_API = "https://2-dot-backup-server-003.appspot.com/_api/v2/songs/get-free-songs";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", MP3_API, true);
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            // Parse kết quả trả về thành kiểu json.
            var responseJson = JSON.parse(this.responseText);
            var symbol, color;
            symbol = '0123456789ABCDEF';
            var htmlContent = "";

            for (var i = 0; i < responseJson.length; i++) {
                var Song = {
                    name: responseJson[i].name,
                    description: responseJson[i].description,
                    singer: responseJson[i].singer,
                    author: responseJson[i].author,
                    thumbnail: responseJson[i].thumbnail,
                    link: responseJson[i].link,
                };


                if (responseJson[i].name == "1234") continue;

                var int = Math.floor(Math.random() * 10000);
                color = '#';

                for (var j = 0; j<6; j++){
                    color = color + symbol[Math.floor(Math.random() * 16)];
                }

                htmlContent += '<div class="audio"><div class="stt" style="color: '+ color +'">' + (i + 1) + '</div><span>&ndash;</span><div class="imgSong"><img src="' + responseJson[i].thumbnail + '" alt="Song"></div>' +
                    '<div class="titleSong"><div class="nameSong">' + Song.name + '</div><div class="nameSinger">' + responseJson[i].author + ', ' + responseJson[i].singer + '</div></div>' +
                    '<div class="controlsIcon"><ul><li><a href="#"><i class="fa fa-download" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-plus" aria-hidden="true"></i></a></li><li><a style="cursor: pointer" target="_blank"  onclick="postToFeed(\'' +  responseJson[i].name + '\', \'' + responseJson[i].description + '\', \' https://demo-app-html.herokuapp.com/projectSem1/index.html \', \'' + responseJson[i].thumbnail + '\')"><i class="fa fa-share-alt" aria-hidden="true"></i></a></li><li><a href="javascript:void(0)" ' +
                    'onclick="playSong(\'' + Song.name + '\', \'' + Song.description + '\', \'' + Song.singer + '\', \'' + Song.author + '\', \'' + Song.thumbnail + '\', \'' + Song.link + '\')">' +
                    '<i class="fa fa-play" aria-hidden="true"></i></a></li></ul></div>' +
                    '<div class="view">' + formatNumber(int) + '</div>'+
                    '</div>';

                if (i === 9) break;
            }
            document.getElementById('listSong').innerHTML = htmlContent;
            $('.view').counterUp({delay: 20, time: 1000}).delay(2000);
        } else if (this.readyState === 4) {
            console.log("Fails");
        }
    };
    var token = localStorage.getItem('token');
    xhr.setRequestHeader('Authorization', 'Basic ' + token);
    xhr.send();
};

function playSong(name, description, singer, author, thumbnail, link) {
    var Song = {
        name        : name,
        description : description,
        singer      : singer,
        author      : author,
        thumbnail   : thumbnail,
        link        : link
    };
    var SongJson = JSON.stringify(Song);
    localStorage.setItem('song', SongJson);
    location.href = 'playSong.html'
}

// function random number and format
function formatNumber(n, c, t) {
    var c = isNaN(c = Math.abs(c)) ? 0 : c,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
        j = (j = i.length) > 3 ? j % 3 : 0;

    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
}


window.fbAsyncInit = function () {
    FB.init({
        appId: '189962861886444', status: true, cookie: true, xfbml: true
    });
};
(function (d, debug) {
    var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement('script');
    js.id = id;
    js.async = true;
    js.src = "//connect.facebook.net/en_US/all" + (debug ? "/debug" : "") + ".js";
    ref.parentNode.insertBefore(js, ref);
}(document, /*debug*/ false));

function postToFeed(title, desc, url, image) {
    var obj = {
        method: 'feed',
        link: url,
        picture:  image,
        name: title,
        description: desc
    };

    function callback(response) {
    }

    FB.ui(obj, callback);
}

$(document).ready(function () {
    $('.login').click(function () {
        $('#modalLogin').modal();
    });
});

