$(document).ready(function () {
    $('.login').click(function () {
        $('#modalLogin').modal();
    });
    loadMp3();
});


var limitSong = 6;

function readMore() {
    limitSong = limitSong + 6;
    loadMp3(limitSong);
}

function loadMp3() {
    var MP3_API = "https://2-dot-backup-server-002.appspot.com/_api/v2/songs";
    $.ajax({
        url: MP3_API,
        method: 'GET',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + localStorage.token);
        },
        success: function (res) {
            res.reverse();
            let symbol, color;
            symbol = '0123456789ABCDEF';
            let htmlContent = "";

            for (var i = 0; i < res.length; i++) {

                var int = Math.floor(Math.random() * 10000);
                color = '#';

                for (var j = 0; j < 6; j++) {
                    color = color + symbol[Math.floor(Math.random() * 16)];
                }

                htmlContent += '<div class="audio"><div class="stt" style="color: ' + color + '">' + (i + 1) + '</div><span>&ndash;</span><div class="imgSong" onclick="switchPlaySong(\'' + res[i].id + '\')" style="background: url(' + res[i].thumbnail + ') no-repeat 50% 50%;background-size: cover"></div>' +
                    '<div class="titleSong"><div class="nameSong" onclick="switchPlaySong(\'' + res[i].id + '\')">' + res[i].name + '</div><div class="nameSinger">' + res[i].singer + '</div></div>' +
                    '<div class="controlsIcon"><ul><li><a href="#"><i class="fa fa-download" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-plus" aria-hidden="true"></i></a></li><li><a style="cursor: pointer" target="_blank"  onclick="postToFeed(\'' + res[i].name + '\', \'' + res[i].description + '\', \' https://demo-app-html.herokuapp.com/projectSem1/index.html \', \'' + res[i].thumbnail + '\')"><i class="fa fa-share-alt" aria-hidden="true"></i></a></li><li><a href="playSong.html?id=' + res[i].id + '" ' +
                    '<i class="fa fa-play" aria-hidden="true"></i></a></li></ul></div>' +
                    '<div class="view">' + formatNumber(int) + '</div>' +
                    '</div>';
                if (i == limitSong) break;
            }
            $('#listSong').html(htmlContent + '<div class="row"><a href="javascript:void(0)" onclick="readMore()" style="width: 100%;text-align: right">Xem thêm</a></div>');
            $('.view').counterUp({delay: 20, time: 1000}).delay(2000);
        },
        error: function (msg) {
            alert("loi")
        }
    });

};


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


