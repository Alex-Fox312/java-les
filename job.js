confirm(1)
confirm(`
    Страна производитель: Germani;
    Модель: Audi TT RS;
    Год выпуска: 2009 - 20....;
    Cредняя скорость: 125 км/час;`);

let x = (300)
let distance = prompt('Укажите дистанцию которую собираеетесь приодолеть: ');
let time = (distance / 125 * 60);
confirm(time + ' минут')

confirm(3)
let now = new Date().toLocaleTimeString();
confirm('сейчас: ' + now);

let second = prompt('?')

now.setSeconds(+second);

confirm('сейчас с добавиленым временем: ', now);

