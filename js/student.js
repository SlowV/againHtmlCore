var listStudent = [
    {
        'name': 'Sơn Tùng',
        'avatar': 'https://i.pinimg.com/564x/6e/2d/c1/6e2dc14493064ec746d7d003e1779f8a.jpg',
        'phone': '0349555602',
    },
    {
        'name': 'SlowV',
        'avatar': 'https://i.pinimg.com/564x/f6/8e/a3/f68ea3b29d637a7094c3e02241b452fb.jpg',
        'phone': '0349555602',
    },
    {
        'name': 'Anime',
        'avatar': 'https://i.pinimg.com/564x/0f/21/06/0f21068dd9436468193981a7382b9bcf.jpg',
        'phone': '0164955602',
    },
    {
        'name': 'Throw',
        'avatar': 'https://i.pinimg.com/564x/da/1c/5d/da1c5d4601cf7fc93029c97b8ca39d79.jpg',
        'phone': '0164955602',
    },
    {
        'name': 'Eminem',
        'avatar': 'https://i.pinimg.com/564x/24/13/e4/2413e448f381cf63a0d5c1d588ac9fb5.jpg',
        'phone': '0164955602',
    },
    {
        'name': 'Suri',
        'avatar': 'https://i.pinimg.com/564x/16/5f/b5/165fb5a4937b0c6877c446e4b86688e8.jpg',
        'phone': '0164955602',
    },
    {
        'name': 'Mya',
        'avatar': 'https://i.pinimg.com/564x/0e/42/de/0e42dee04c937ffb827e131f3544eb4d.jpg',
        'phone': '0164955602',
    },
    {
        'name': 'Mihu',
        'avatar': 'https://i.pinimg.com/564x/12/c2/21/12c2210694bc8a87441970e11831148b.jpg',
        'phone': '0164955602',
    }
];

var content = document.getElementById('content');

for (var i = 0; i < listStudent.length; i++) {
   content.innerHTML += '<div class="student">'+
                            '<div class="box-img">'+
                                '<img id="avatar" src="'+ listStudent[i].avatar +'" alt="Avatar">'+
                            '</div>'+
                            '<div class="title">'+
                                '<div class="nameStudent">' + listStudent[i].name +'</div>'+
                                '<div class="phoneStudent">'+ listStudent[i].phone+'</div>'+
                            '</div>'+
                       '</div>';
   if (i === 3){
       content.innerHTML += '<div style="clear: both; display: block"></div>'
   }
}

