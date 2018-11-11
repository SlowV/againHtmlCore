document.addEventListener('DOMContentLoaded', function (event) {
    var MemberLogin = {
        email: "quocviet.hn98@gmail.com",
        password: "viet1998"
    };
    var jsonData = JSON.stringify(MemberLogin);
    Login(jsonData);
});

function Login(jsonData) {
    var MP3_API = "https://2-dot-backup-server-003.appspot.com/_api/v2/members/authentication";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", MP3_API, true);
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 201) {
            // Parse kết quả trả về thành kiểu json.
            var responseJson = JSON.parse(this.responseText);
            localStorage.setItem('token', responseJson.token);
            GetInformation(responseJson.token);
        } else if (this.readyState === 4) {
            console.log("Fails");
        }
    };
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(jsonData);
}

function GetInformation(token) {
    var MP3_API = "https://2-dot-backup-server-003.appspot.com/_api/v2/members/information";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", MP3_API, true);
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 201) {
            // Parse kết quả trả về thành kiểu json.
            var res = JSON.parse(this.responseText);
            var gender ='';
            if(res.gender == 0){
                gender = 'Nữ';
            }else if (res.gender == 1){
                gender = 'Nam';
            }else {
                gender = 'Khác';
            }
            var Member = {
                firstName   : res.firstName,
                lastName    : res.lastName,
                avatar      : res.avatar,
                phone       : res.phone,
                address     : res.address,
                introduction: res.introduction == null ? 'Không có' : res.introduction,
                gender      : gender,
                birthday    : res.birthday.substring(0, 10),
                email       : res.email,
                createdAt   : res.createdAt.substring(0, 10)
            };
            var memberJson = JSON.stringify(Member);
            localStorage.setItem('member', memberJson);
            console.log(localStorage.getItem('member'));

        } else if (this.readyState === 4) {
            console.log("Fails");
        }
    };
    xhr.setRequestHeader("Authorization", " Basic "+ token);
    xhr.send();
}