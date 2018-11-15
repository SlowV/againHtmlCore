$(window).on('load', function () {
   $('.img-box-loading').addClass('complete');
   $('#navLink').removeClass('Shidden');
});

$(document).ready(function () {
    $('.login').click(function () {
        $('#modalLogin').modal();
    });
    $('.btn-login').click(function () {
        var memberLogin = {
            email   : $('#formLogin #username').val(),
            password: $('#formLogin #pass').val()
        };



    });
});

function Login(jsonData) {
    $.ajax({
        url: 'https://2-dot-backup-server-002.appspot.com/_api/v2/members/authentication'
    });
}

function switchPlaySong(id) {
    location.href = 'playSong.html?id=' + id;
}


// setTimeout(function () {
//     $('.img-box-loading').fadeOut('slow');
//     $('.img-box-loading img').attr('style', 'width:0px;')
// }, 2000);

function myFunctionActiveResponsive() {
    var element = document.querySelector('nav').querySelector('ul');
    element.classList.toggle("active");
}

// event scroll page
window.addEventListener('scroll', function () {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top == 0) {
        document.querySelector('nav').classList.remove('black');
    } else {
        document.querySelector('nav').classList.add('black');
    }
});

//function hover img-chlid
function changeThumbnail(src) {
    var thumbnail = document.querySelector('.thumbnail').querySelector('img');
    thumbnail.src = src;
}


//Hàm khởi tại chạy scroll animation page
AOS.init({
    duration: 1300
});

$(function () {
    $(window).scroll
    (function () {
        if ($(this).scrollTop() != 0) {
            $("#noop-top").fadeIn()
        } else {
            $("#noop-top").fadeOut()
        }
    });
    $("#noop-top").click(function () {
        $("body,html").animate({scrollTop: 0}, 800);
        return false;
    })
});


function postMember(dataJson) {
    var REGISTER_API = "https://2-dot-backup-server-002.appspot.com/_api/v2/members";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", REGISTER_API, true);
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 201) {
        	console.log("dang ky thanh cong");
        }else if (this.readyState === 4) {
            console.log("Fails");
        }
    };
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(dataJson);
}