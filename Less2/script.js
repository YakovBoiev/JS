'use strict'
/*less_2_task_1
Почему код даёт именно такие результаты?*/
var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2. Увеличивает перменную "а" на еденицу "a" = 2, возращает новое значение 2 переменной "а", присваевает значение 2 переменной "с"
d = b++; alert(d);// 1. Увеличивает пременную "b" на еденицу "b" = 2, возращает старое значение 1 переменной "b", присваивает значение 1 переменной "d"
c = (2+ ++a); alert(c); // 5. Увеличивает перменную "а" на еденицу "a = 3", возращает новое значение 3 перменной "a", сложение 2 + 3 = 5, присваивает значение 5 пременной "c"
d = (2+ b++); alert(d); // 4. Увеличивает пременную "b" на еденицу "b = 3", возращает старое значение 2 переменной "b", сложение 2 + 2 = 4, присваивает значение 4 переменной "d"
alert(a);// 3
alert(b); // 3

/* less_2_task_2
Чему будет равен x в примере ниже?
*/
var a = 2;
var x = 1 + (a *= 2); // 5. Умножает переменную "a" на 2, скаладывает 1 + 4, присваивает значение 5 переменной "x"
alert(x);
/*
3. less_2_task_3
Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
 */
{
    let a = parseInt(prompt('Введите значение переменной a'));
    let b = parseInt(prompt('Введите значение переменной b'));
    if (a >= 0 && b >= 0)
        alert(`a - b = ${a - b}`);
    else if (a < 0 && b < 0)
        alert(`a * b = ${a * b}`);
    else if ((a < 0 && b >= 0) || (a >= 0 && b < 0))
        alert(`a + b = ${a + b}`);
}
/*
less_2_task_4
Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
 */
let num = parseInt(prompt('Введите число от 0 до 15'))
let output = ""
switch (num){
    case 0:
        output += num++ + " ";
    case 1:
        output += num++ + " ";
    case 2:
        output += num++ + " ";
    case 3:
        output += num++ + " ";
    case 4:
        output += num++ + " ";
    case 5:
        output += num++ + " ";
    case 6:
        output += num++ + " ";
    case 7:
        output += num++ + " ";
    case 8:
        output += num++ + " ";
    case 9:
        output += num++ + " ";
    case 10:
        output += num++ + " ";
    case 11:
        output += num++ + " ";
    case 12:
        output += num++ + " ";
    case 13:
        output += num++ + " ";
    case 14:
        output += num++ + " ";
    case 15:
        output += num++ + " ";
        alert(output)
        break;
    default:
        alert("число не входит в диапазон от 0 до 15")
}
/* less_2_task_5
Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
Обязательно использовать оператор return.
 */
function my_sum(a, b){
    return a + b;
}
function my_diff(a, b){
    return a - b;
}
function my_mult(a, b){
    return a * b;
}
function my_div(a, b){
    return a / b;
}
/*less_2_task_6
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
 где arg1, arg2 – значения аргументов, operation – строка с названием операции.
  В зависимости от переданного значения операции выполнить одну из арифметических операций
  (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
 */
function mathOperation(arg1, arg2, operation){
    switch (operation){
        case "+":
            return my_sum(arg1, arg2);
        case "-":
            return my_diff(arg1, arg2);
        case "*":
            return my_mult(arg1, arg2);
        case "/":
            return my_div(arg1, arg2);
        default:
            return "Операция не предусмотрена";
    }
}
/*
less_2_task_7
Сравнить null и 0. Попробуйте объяснить результат.
 */
alert(null == 0) // false. null - специальное значение для обозначения "ничто", 0 - целое число.
/* less_2_task_8
С помощью рекурсии организовать функцию возведения числа в степень.
Формат: function power(val, pow), где val – заданное число, pow – степень.
 */
function power(val, pow){
    if (pow == 0)
        return 1;
    else if (pow == 1)
        return val;
    else
        return val * power(val, pow - 1 )
}
alert(power(5, 6))



