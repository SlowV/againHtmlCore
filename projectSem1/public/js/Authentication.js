document.addEventListener('DOMContentLoaded', function (event) {
    var MemberLogin = {
        email: "quocviet.hn98@gmail.com",
        password: "viet1998"
    };
    var jsonData = JSON.stringify(MemberLogin);
    Login(jsonData);
});

function Login(jsonData) {
    var MP3_API = "https://2-dot-backup-server-002.appspot.com/_api/v2/members/authentication";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", MP3_API, true);
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 201) {
            // Parse kết quả trả về thành kiểu json.
            var responseJson = JSON.parse(this.responseText);
            localStorage.setItem('token', responseJson.token);
        } else if (this.readyState === 4) {
            console.log("Fails");
        }
    };
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(jsonData);
}