/*-------------------------------------------------------- */

var checkedGame = document.getElementsByName("favourite[]"); /* => Trỏ đến tất cả các element(ví dụ <div></div> là 1 element) có attribute(thuộc tính) name="favourite[]", 
																vì name nên là unique(duy nhất) nên có dấu [] sau nghĩa là 1 mảng và không bị trùng name. 
																Biến checkecGame là array(mảng) tập hợp các element có name = "favourite[]"*/
/*-------------------------------------------------------- */

var btnSubmit = document.forms["favourite-form"]["btn-submit"]; /* => Trỏ đến Form với attr name = "favourite-form"* và từ form ta gọi tiếp đến input có attr name = "btn-submit",
																Ta đã lấy đc nút bấm.*/

btnSubmit.onclick = function(){		/* => Từ nút bấm đó ta gắn cho nút đó 1 sự kiện click nghĩa là khi ta kích chuột vào nút đó sẽ làm 1 công việc nào đó.*/
    var arrayName = [];            /* Tạo 1 array = [] (nghĩa là tạo 1 mảng rỗng chưa có gì bên trong, để lát nữa mình nhét value(giá trị) từ các ô checkbox đã checked(đã tích dấu V))*/

    for (i = 0; i < checkedGame.length; i++) {          /* => Vì biến checkedGame là 1 array(mảng) cho nên ta phải dùng vòng lặp for để lấy phần tử bên trong mảng.*/
        if (checkedGame[i].checked != true){continue;} /* dùng if để check xem  những thằng nào là đã đc checked(đã tích dấu V) với vì checked trả về true, false nên điều kiện cho if là
    													phần tử thứ i.checked != true thì continue(continue là bỏ qua, còn break là kết thúc vòng lặp) khác true nghĩa là nó = false mà bằng false nghĩa là nó chưa tích dấu V*/
        arrayName.push(checkedGame[i].value + ",");		/* sau khi lọc được những phần tử đã checked thì ta lấy value của nó ném vào array rỗng đã tạo lúc ban đầu.*/
    }
    alert(arrayName); /* bây giờ trong array là value của các phần tử đã checked(đã tích dấu V) và alert array đó*/.
};

