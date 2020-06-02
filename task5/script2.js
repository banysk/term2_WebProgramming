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

let body = $('body');
function create(list) {
    let ul = $('<ul>').appendTo(body);
    for (let element of list) {
        let li = $('<li>').append(element.text);
        ul.append(li);
        body = li
        if (element.children && element.children != undefined) {
            create(element.children);
        }
    }
}
create(list);
$('li').each(function () {
    console.log(
        $(this).contents()[0],
        $(this).find('li').length
    );
});
$('li').click(function () {
    $(this).contents().slideToggle('slow');
    return false;
});