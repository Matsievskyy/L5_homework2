function randomNum(min, max) {
    let arr = [];
    for (var j = 0; j < 100; j++) {
        arr.push((Math.random() * (max - min) + min).toFixed());
    }
    return arr;
}
let newArray = randomNum(-100, 100);
console.log(newArray);
// ---------------------------------------------------2 завдання(відємні та додатні числа)------------------------------
// вводимо змінну з значеннями масиву більше 0
const biggerThatZero = newArray.filter(function (item) {
    return item > 0
});
// вводимо змінну з значеннями масиву менше 0 
const lessThatZero = newArray.filter(function (item) {
    return item < 0
});

// чому елементи більші 0 були перетворені у рядок?
function sumBiggerThatZero(item) {
    return item.reduce(function (a, b) {
        return +a + +b
    });
}


function sumLessThatZero(item) {
    return item.reduce(function (a, b) {
        return a - b
    });
}
console.log(sumBiggerThatZero(biggerThatZero));
console.log(sumLessThatZero(lessThatZero));
// ----------------------------------------------------3 завдання(найбільше та найменше значення)--------------------------------------------
let convert = newArray.map(Number);

const MaxValue = (Math.max(...convert));
const MinValue = (Math.min(...convert));
console.log(MaxValue);
console.log(MinValue);

