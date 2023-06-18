let meaning = +prompt('Введите число')
if (typeof meaning === 'number' && !isNaN(meaning)) {
    if (meaning % 2 == 0) {
        console.log('Чётное число')
    }
    else {
        console.log('Нечётное число')
    }
} else {
    console.log('Упс! Кажется, Вы ошиблись!')
}