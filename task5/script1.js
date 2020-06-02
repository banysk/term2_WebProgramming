var list = [
    {
        text: 'Аниме по целевой аудитории',
        children: [
            {
                text: 'Кодомо',
                children: [{ text: 'Соник Икс' }, { text: 'Перепутье игры и драконов' }, { text: 'Пита-Тэн' }]
            },
            {
                text: 'Сёнэн',
                children: [{ text: 'Адский учитель Нубэ' }, { text: 'Айшилд 21' }, { text: 'Ария' }]
            },
            {
                text: 'Сёдзё',
                children: [{ text: 'Белые ночи' }, { text: 'В песках поющие китята' }, { text: 'Внеземной малыш' }]
            }
        ]
    },
    {
        text: 'Аниме по сеттингу',
        children: [
            {
                text: 'Апокалиптика',
                children: [{ text: 'Промар' }, { text: 'Лазурный путь' }]
            },
            {
                text: 'Боевик',
                children: []
            },
            {
                text: 'Боевые искусства',
                children: [{ text: 'Баки' }, { text: 'Бамбуковый клинок' }]
            }
        ]
    }
]

var ul = document.body.appendChild(document.createElement('ul'));

function create(element, ul) {
    var li = ul.appendChild(document.createElement('li'));
    li.appendChild(document.createTextNode(element.text));
    if (element.children && element.children != undefined) {
        var new_ul = li.appendChild(document.createElement('ul'));
        for (var child of element.children) {
            create(child, new_ul);
        }
    }
}
function information(element) {
    for (child of element.children) {
        if (child.children) {
            console.dir(child);
            information(child);
        }
    }
}

for (var elem of list) {
    create(elem, ul);
}
information(document)
