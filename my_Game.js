var checkedGame = document.getElementsByName("favourite[]");

var btnSubmit = document.forms["favourite-form"]["btn-submit"];

btnSubmit.onclick = function(){
    var arrayName = [];

    for (i = 0; i < checkedGame.length; i++) {
        if (checkedGame[i].checked != true){continue;}
        arrayName.push(checkedGame[i].value + ",");
    }
    alert(arrayName);
};

