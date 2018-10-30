loadMp3();
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
                    '<div class="title">' + responseJson[i].description +'</div>'+
                    '</div>'+
                    '<div class="box-icon">'+
                    '<ul>'+
                    '<li><a href="javascript:void(0)" onclick="playSong(\''+ responseJson[i].link +'\')"><i class="fa fa-play" aria-hidden="true"></i></a></li>'+
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

function playSong(link) {
    var mp3 = document.getElementById('audio-play');
    mp3.src = link;
    mp3.play();
}