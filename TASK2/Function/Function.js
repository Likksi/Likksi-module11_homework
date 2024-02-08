function getPercents(percent, number) {
    if (typeof percent !== 'number' || typeof number !== 'number') {
        console.error("Ошибка: Оба аргумента должны быть числами");
        return NaN; // Возвращаем NaN в случае ошибки
    }
  
    let result = (percent / 100) * number;
    return result;
}
