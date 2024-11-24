// Задание 1  ----------------------------------------------

let naturalNumber = 52;
// Это переменная

naturalNumber = 144; 
// Здесь мы изменили значение переменной naturalNumber
// Это не приведет к ошибке, так как это переменная. Ее можно менять

const firstPresident = "Nursultan Nazarbayev";
// Это константа

// Раскомментируйте следующую строку чтобы увидеть ошибку в консоли
// firstPresident = "Kasymzhomart Tokayev";
// Здесь мы получим ошибку, так как это константа и менять ее значение запрещено.
// Ошибка будет выведена в консоль


// Задание 2  ----------------------------------------------

// Здесь мы вызываем переменную раньше ее объявления. Ошибок нет
avenger = "Loki";
console.log(avenger);
// Здесь мы дважды объявляем одну и ту же переменную. И снова ошибок нет.
var avenger = "Hulk";
console.log(avenger);
var avenger = "Spiderman";
console.log(avenger);

// Выше пример того как переменная была объявлена через "var"
// Данный способ устарел так как он может приводить к ошибкам,
// Кто-нибудь может переназначить переменную даже не подозревая
// что она уже существует.
// благодаря "var" переменная перемещается на самый верх кода. 
// Это происходит за счет "hoisting", то есть поднятия вверх кода
// Очевидно это все может привести к путанице


// Задание 3  ----------------------------------------------

// Задаем несколько переменных с разными типами
let integer = 123;
let sentence = "Code like a pro.";
let trueOrLie = true;
let justice = undefined;
let not_a_number = NaN;

// Выводим в консоли значения этих переменных и их типы
console.log(`У переменной "integer" значение: ${integer}, и она предналежит типу: ${typeof integer}`);
console.log(`У переменной "sentence" значение: ${sentence}, и она предналежит типу: ${typeof sentence}`);
console.log(`У переменной "trueOrLie" значение: ${trueOrLie}, и она предналежит типу: ${typeof trueOrLie}`);
console.log(`У переменной "justice" значение: ${justice}, и она предналежит типу: ${typeof justice}`);
console.log(`У переменной "not_a_number" значение: ${not_a_number}, и она предналежит типу: ${typeof not_a_number}`);

// Задание 4  ----------------------------------------------

// Ниже несколько примеров изменения строчного типа на числовой.
// При этом в строке должны быть прописаны числа
// Сначала задаем переменную строчного типа
let someString = "654";

// Теперь меняем тип этой переменной на числовой и присваиваем это значение новой переменной
let numberFromString = Number(someString);
console.log(`\nУ переменной "numberFromString" значение: ${numberFromString}, 
и она предналежит типу: ${typeof numberFromString}`);

// Тоже самое можно сделать с помощью оператора +
let numberFromString2 = +someString;
console.log(`\nУ переменной "numberFromString2" значение: ${numberFromString2}, 
и она предналежит типу: ${typeof numberFromString2}`);

// Также можно использовать встроенные функции parseInt и parseFloat
let someNumber = "17.15"
let numberFromString3 = parseInt(someNumber);
console.log(`\nУ переменной "numberFromString3" значение: ${numberFromString3}, 
и она предналежит типу: ${typeof numberFromString3}`);
let realNumber = "3.14"
let numberFromString4 = parseFloat(realNumber);
console.log(`\nУ переменной "numberFromString4" значение: ${numberFromString4}, 
и она предналежит типу: ${typeof numberFromString4}`);

// В примере выше parseInt отбрасывает дробную часть, 
// а parseFloat выводит всё число вместе с дробной частью


// Теперь меняем числовые переменные на строчные
let someNaturalNumber = 7489

// Для изменения на строчный тип можно использовать функцию "String"
let stringFromNumber = String(someNaturalNumber);
console.log(`\nУ переменной "stringFromNumber" значение: ${stringFromNumber}, 
и она предналежит типу: ${typeof stringFromNumber}`);

// Или можно просто прибавить число к пустой строке
let stringFromNumber2 = "" + someNaturalNumber;
console.log(`\nУ переменной "stringFromNumber2" значение: ${stringFromNumber2}, 
и она предналежит типу: ${typeof stringFromNumber2}`);

// Также есть специальный метод "toString()"
let stringFromNumber3 = someNaturalNumber.toString();
console.log(`\nУ переменной "stringFromNumber3" значение: ${stringFromNumber3}, 
и она предналежит типу: ${typeof stringFromNumber3}`);


// Теперь попробуем преобразовать "undefined" и "null" в строку и число
let someUndefinedValue = undefined;

// Сначала используем функцию String, и получаем строку "undefined"
let undefinedToString = String(someUndefinedValue);
console.log(`\nУ переменной "undefinedToString" значение: ${undefinedToString}, 
и она предналежит типу: ${typeof undefinedToString}`);

// пробуем прибавить пустую строку к undefined, и получим строку "undefined"
let undefinedToString2 = "" + someUndefinedValue;
console.log(`\nУ переменной "undefinedToString2" значение: ${undefinedToString2}, 
и она предналежит типу: ${typeof undefinedToString2}`);

// Ниже код закомментирован, так как использование метода toString() у undefined приводит к ошибке
//      let undefinedToString3 = someUndefinedValue.toString();
//      console.log(`\nУ переменной "undefinedToString3" значение: ${undefinedToString3}, 
//      и она предналежит типу: ${typeof undefinedToString3}`);


// Попробуем преобразовать undefined в число

// Использование функции Number для undefined даст результат NaN
let undefinedToNumber = Number(someUndefinedValue);
console.log(`\nУ переменной "undefinedToNumber" значение: ${undefinedToNumber}, 
и она предналежит типу: ${typeof undefinedToNumber}`);

// Если поставить + перед undefined, то мы получим NaN
let undefinedToNumber2 = +someUndefinedValue;
console.log(`\nУ переменной "undefinedToNumber2" значение: ${undefinedToNumber2}, 
и она предналежит типу: ${typeof undefinedToNumber2}`);

// parseInt и parseFloat также дают NaN, если вложить в них undefined
let undefinedToNumber3 = parseInt(someUndefinedValue);
console.log(`\nУ переменной "undefinedToNumber3" значение: ${undefinedToNumber3}, 
и она предналежит типу: ${typeof undefinedToNumber3}`);

let undefinedToNumber4 = parseFloat(someUndefinedValue);
console.log(`\nУ переменной "undefinedToNumber4" значение: ${undefinedToNumber4}, 
и она предналежит типу: ${typeof undefinedToNumber4}`);


// Теперь проверим что будет с null, если попытаться изменить его тип на число или строку
let someNull = null;

// Сначала используем функцию String, и получаем строку "null"
let nullToString = String(someNull);
console.log(`\nУ переменной "nullToString" значение: ${nullToString}, 
и она предналежит типу: ${typeof nullToString}`);

// пробуем прибавить пустую строку к null, и получим строку "null"
let nullToString2 = "" + someNull;
console.log(`\nУ переменной "nullToString2" значение: ${nullToString2}, 
и она предналежит типу: ${typeof nullToString2}`);

// Ниже код закомментирован, так как использование метода toString() у null приводит к ошибке
    //  let nullToString3 = someNull.toString();
    //  console.log(`\nУ переменной "nullToString3" значение: ${nullToString3}, 
    //  и она предналежит типу: ${typeof nullToString3}`);


// Использование функции Number для null даст результат 0
let nullToNumber = Number(someNull);
console.log(`\nУ переменной "nullToNumber" значение: ${nullToNumber}, 
и она предналежит типу: ${typeof nullToNumber}`);

// Если поставить + перед null, то мы получим 0
let nullToNumber2 = +someNull;
console.log(`\nУ переменной "nullToNumber2" значение: ${nullToNumber2}, 
и она предналежит типу: ${typeof nullToNumber2}`);

// parseInt и parseFloat дают NaN, если вложить в них null
let nullToNumber3 = parseInt(someNull);
console.log(`\nУ переменной "nullToNumber3" значение: ${nullToNumber3}, 
и она предналежит типу: ${typeof nullToNumber3}`);

let nullToNumber4 = parseFloat(someNull);
console.log(`\nУ переменной "nullToNumber4" значение: ${nullToNumber4}, 
и она предналежит типу: ${typeof nullToNumber4}`);


// Задание 5  ----------------------------------------------

let numberOfFollowers = 218;
let message = "You have " + numberOfFollowers + " followers";
console.log(message);

// Все примеры выше - это примеры динамической типизации в JavaScript
// Динамическая типизация означает что тип переменной можно менять в любое время.
// Также при разных операциях над переменными компилятор сам приводит значение итоговых переменных
// к одному типу. Это происходит автоматически. 
// Это называется также Слабой типизацией и может быть причиной сложных ошибок.

// Задание 5  ----------------------------------------------

// Выводим окно с сообщением для пользователя, где он может вписать данные
let promptName = prompt("Введите ваше имя: ");
let promptAge = prompt("Введите ваш возраст: ");

// Выводим данные пользователя ввиде строки
console.log(`Пользователя зовут ${promptName} и его возраст ${promptAge}`)