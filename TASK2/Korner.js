// Ноль
console.log(getPercents(0, 200)); // Ожидаемый результат: 0
console.log(getPercents(30, 0)); // 0

// Минус
console.log(getPercents(-30, 200)); // -60
console.log(getPercents(30, -200)); // -60

// Дробь
console.log(getPercents(50.5, 200)); // 101
console.log(getPercents(30, 150.75)); // 45.225

// Большие значения
console.log(getPercents(30, 1000000)); // 300000
console.log(getPercents(150, 200)); // 300

// Проверка на тип данных
console.log(getPercents("30", 200)); // NaN
console.log(getPercents(30, "200")); // NaN
