// 인수와 매게변수
function printbanana() {
  console.log("banana");
}
printbanana();
// -----------------------------------------------
function printapple() {
  console.log("apple");
}
printapple();
// -----------------------------------------------
function fruit(name, price) {
  console.log(name + "는" + price + "입니다.");
}
fruit("apple", 2000);
// -----------------------------------------------
function printplus(number1, number2, number3) {
  console.log("총 합은" + number1 + number2 + number3 + "입니다.");
}
printplus(1, 100, 1000);
// -----------------------------------------------
function Cafee682(arr) {
  console.log(arr[0] + "는" + arr[1] + "입니다.");
}
Cafee682(["apple", 2000]);
// -----------------------------------------------
function Cafe682(obj) {
  console.log(obj.name + "는" + obj.price + "입니다.");
}
Cafe682({ name: "cake", price: 2000 });
// -----------------------------------------------
// return
// return 키워드는 함수 안에서만 사용이 가능하다. 함수를 호출한 부분으로 데이터를 전달해주기 위해서 사용한다.
// -----------------------------------------------
function sum(number1, number2) {
  console.log(number1 + number2);
}
sum(10, 20);
// -----------------------------------------------
function sum(number1, number2) {
  return number1 + number2;
}
const sum_result1 = sum(10, 20);
const sum_result2 = sum(30, 40);

const sum_result = sum_result1 + sum_result2;
console.log("총 합은" + sum_result + "입니다.");
// -----------------------------------------------
function return11() {
  console.log("return실행 전");
  return;
  console.log("return실행 후");
}
return11();
// -----------------------------------------------
function printminus(number1, number2, number3) {
  return number1 - number2 - number3;
}
const printminus_result1 = printminus(100, 20, 30);
const printminus_result2 = printminus(20, 4, 5);
const printminus_result3 = printminus(30, 2, 5);
const printminus_result =
  printminus_result1 + printminus_result2 + printminus_result3;
console.log("이 값은" + printminus_result + "입니다.");
// -------------------------------------------------------

const sum = function sum(num1, num2, num3) {
  return num1 + num2 + num3;
};
const result1 = sum(10 + 20 + 30);
const result2 = sum(40 + 50 + 60);
const result = result1 + result2;
console.log("총 합은" + result + "입니다.");
