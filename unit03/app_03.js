//Установите Node.js с сайта программы. Повторите действия урока.

console.log('Если вы это видите - то сделали!!!');

// Task 2. Напишите функцию f2, которая принимает 2 числа и выводит и возвращает максимальное из них. Для этого используйте Math.

const f2 = (a, b) => {
    const maxVal = Math.max(a, b);
    console.log(maxVal);
    return maxVal;
}

f2(4, 7);

// Task 3. Напишите функцию f3, которая выводит и возвращает случайное число от 0 до 10.

const f3 = () => {
    const randomVal0To10 = Math.floor(Math.random() * (10 + 1));
    console.log(randomVal0To10);
    return randomVal0To10;
}

f3();

// Task 4. Напишите функцию f4, которая выводит и возвращает случайное число от a до b.

const f4 = (a, b) => {
    const randomValMinToMax = Math.floor(a + Math.random() * (b + 1 - a));
    console.log(randomValMinToMax);
    return randomValMinToMax;
}

f4(6, 17);

// Тask 5. Напишите фукнцию f5, которая выводит и возвращает текущую дату в формате год-месяц-день. Причем делает это с ведущим нулем.
// Пример 2020-03-22

const f5 = () => {

    const nowDate = new Date();
    const separator = '-';
    const formattedDate = [{year: 'numeric'}, {month: '2-digit'}, {day: '2-digit'}]
        .map( option => 
            nowDate.toLocaleString("ru", option) 
        )
        .join(separator);

    console.log(formattedDate);
    return formattedDate;
}

f5()

//Task 6. Напишите функцию f6, которая проверяет является ли введенный год високосным. Возвращает true если да, и false если нет. 

const f6 = (year) => {

    const isLeapYear = !(year % 4);
    console.log(isLeapYear);
    return isLeapYear;

}

f6(2021)