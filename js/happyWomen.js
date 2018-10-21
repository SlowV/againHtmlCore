var btn_readMore = document.getElementById('read-more'); //móc ra nút xem thêm

var list_women =
    [
        "Anh So Ciu",
        "Nhiều Tha Thu",
        "Lắm Sa Cơ",
        "Em anh túc",
        "Có hay chăng",
        "Biết không em",
        "Không là gì",
        "? What"
    ]; /*Khởi tạo 1 mảng danh sach*/

btn_readMore.onclick = function () {  // Gắn sự kiện click vô nút thêm thêm
    var htmlListWomen = document.getElementById('list-women'); // Lấy ra phần tử mang id là list-women
    var content = ""; //tạo biến content rỗng để lát gắn html vô;
    let idCheckbox = 4;
    for (var i = 0; i < list_women.length; i++) {
        content += '<div>';
        content += '<input type="checkbox" id="c' + idCheckbox + '" name="check-favour[]" class ="form-control check-favour" value="' + list_women[i] + '" >';
        content += list_women[i];
        content += '</div>';
        idCheckbox++;
    } // dùng vòng lặp for để tạo html bằng js
    // htmlListWomen.innerHTML += content;
    htmlListWomen.innerHTML += content; // nối html vừa mới tạo vào id list-women bên html.
};

var check_all = document.getElementById("check-all"); // Lấy ra nút check-all
check_all.onclick = function () { //gắn sự kiện click vào nút check-all
    var checkbox = document.getElementsByName('check-favour[]'); //tìm tất cả các phần tử có name = "check-favour[]";
    if(check_all.checked){ // check xem nếu nút check all đang checked thì tất cả thằng checkbox name = check-favour[] có checked bằng true;
        for (var i = 0; i < checkbox.length; i++) {
            checkbox[i].checked = true;
        }
    }else{ // check xem nếu nút check all đang unchecked thì tất cả thằng checkbox name = check-favour[] có checked bằng false;
        for (var i = 0; i < checkbox.length; i++) {
            checkbox[i].checked = false;
        }
    }

};


// Chỗ này e ko cần hiểu nếu muốn hiểu có thể nhờ 1 ai đó tốt js , như thầy chẳng hạn :D!
var submit = document.forms['form-send']['btn-submit'];

submit.onclick = function () {
    var array = [];
    var content = "";
    var checkbox = document.getElementsByName('check-favour[]');
    for (var i = 0; i < checkbox.length; i++){
        if (checkbox[i].checked !== true){
            continue;
        } else {
            if (i === 0) {
                var str = checkbox[i].value;
                content += str.substring(0, 4);
            } else if (i === 1) {
                var str = checkbox[i].value;
                content += str.substring(0, 4);
            } else if (i === 2) {
                var str = checkbox[i].value;
                content += str.substring(0, 5);
            } else if (i === 3) {
                var str = checkbox[i].value;
                content += str.substring(0, 4);
            } else if (i === 4) {
                var str = checkbox[i].value;
                content += str.substring(0, 6);
            } else if (i === 5) {
                var str = checkbox[i].value;
                content += str.substring(0, 4);
            } else if (i === 6) {
                var str = checkbox[i].value;
                content += str.substring(0, 3);
            } else if (i === 7) {
                var str = checkbox[i].value;
                content += str.substring(0, 3);
            } else if (i === 8) {
                var str = checkbox[i].value;
                content += str.substring(0, 5);
            } else if (i === 9) {
                var str = checkbox[i].value;
                content += str.substring(0, 6);
            } else if (i === 10) {
                var str = checkbox[i].value;
                content += str.substring(0, 2);
            }
        }

    }
    array.push(content);
    alert(array);
};
