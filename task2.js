let x = 1,
    res;
switch (typeof x) {
    case 'number':
        res = 'x - число';
        break;
    case 'string':
        res = 'x - строка';
        break;
    case 'boolean':
        res = 'х - логическое';
        break;
    default:
        res = 'Тип х не определен';
}
console.log(res);