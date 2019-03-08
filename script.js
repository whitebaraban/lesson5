var doc = document;

// Первое задание
var btn = doc.querySelector ('#btn');

btn.onclick = function () {
    btn.innerHTML = "Привет";
}

// Второе задание
var btn2 = doc.querySelector ('#btn2');

btn2.onclick = function () {
    text = doc.querySelector('#text');;
    text.innerHTML = "<h1>Hello</h1>";
}

// Третье задание 
var list = doc.querySelector ('#ul');
var btn3 = doc.getElementById('btn3');

btn3.addEventListener ('click', function (event) {
    for (let i = 0; i < ul.childElementCount; i++) {
        ul.children[i].innerHTML = "Unit #" + i;
    };
});



// Четвертое задание - Калькулятор
var calc_btn = doc.getElementsByClassName ('calc-btn');
var oper = doc.querySelector ('#oper');
var firstNum = doc.querySelector ('#firstNum');
var secondNum = doc.querySelector ('#secondNum');
var result = doc.querySelector ('#result');

for (let i = 0; i < calc_btn.length; i++) {
    calc_btn[i].addEventListener('click', function () {
        if ((!isNaN(firstNum.value) && !isNaN(secondNum.value)) && (secondNum.value != '' && firstNum.value != '')) {
            oper.innerHTML = calc_btn[i].innerHTML;
            switch (oper.innerHTML) {
                case '/': result.innerHTML = parseInt(firstNum.value) / parseInt(secondNum.value);
                    break;
                case '*': result.innerHTML = parseInt(firstNum.value) * parseInt(secondNum.value);
                    break;
                case '+': result.innerHTML = parseInt(firstNum.value) + parseInt(secondNum.value);
                    break;
                case '-':result.innerHTML = parseInt(firstNum.value) - parseInt(secondNum.value);
                    break; 
            } 
        } else {
            result.innerHTML = 'Я не могу это вычислить.';
        }   
    });
}

// Пятое задание

var list5 = doc.querySelector('#list');
var newLi = doc.createElement('li');
var btn4 = doc.querySelector ('#btn4');
newLi.textContent = "Новый элемент списка";

btn4.addEventListener('click', function (event) {
    list5.insertBefore(newLi, list5.firstChild); 
    // Почему он вставляет элемент только один раз? list5.children[0] - тоже не срабатывает
});


// Шестое задание
var table = doc.createElement('table');
var td = '';

for (let i = 0; i < 8; i++) {
    var row = doc.createElement('tr');
    for (let j = 0; j < 8; j++) {
        td = doc.createElement('td');
        td.classList.add('cell');
        if (i % 2 == 0) {
            if (j % 2 == 0) {
            td.classList.add('color-bl');
            }
        } else {
            if (j % 2 != 0) {
            td.classList.add('color-bl');
            }
        }
        
        row.appendChild(td);
    }
    table.appendChild(row);
}

doc.querySelector('#table').appendChild(table);