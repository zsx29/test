function printbanana() {
  console.log("banana");
}
printbanana();
//
//
function printapple() {
  console.log("apple");
}
printapple();
//
//
function printFrult() {
  console.log("apple", "banana");
}
printFrult();
//
//
function Frult(name, price, grade) {
  console.log(
    name +
      "의 가격은" +
      price +
      "입니다." +
      "오늘" +
      name +
      "의 상태는" +
      grade +
      "입니다."
  );
}
Frult("사과", 2000, "Good");
//
//array
function cafe682(arr) {
  console.log(
    arr[0] +
      "의 가격은" +
      arr[1] +
      "원 입니다." +
      "서비스로 " +
      arr[2] +
      "케이크를 드립니다^^"
  );
}
cafe682(["커피", 2000, "얼그레이"]);
//
//object
function color(obj) {
  console.log(obj.name + "색생이며 " + "상태는" + obj.grade + "입니다.");
}
color({ name: "blue", grade: "good" });
//
//
function sum(number1, number2) {
  return number1 + number2;
}
const sum_result1 = sum(10, 20);
const sum_result2 = sum(40, 70);
const sum_result = sum_result1 + sum_result2;
console.log("총 합은" + sum_result + "입니다.");
//
//
function plmin(num1, num2, num3) {
  return num1 + num2 - num3 + num1;
}
const plminresult1 = plmin(100, 20, 40);
const plminresult2 = plmin(400, 40, 60);
const plminresult = plminresult1 + plminresult2 - plminresult1;
console.log(plminresult);
//
//
const plminus = function plmin(num1, num2, num3) {
  return num1 + num2 - num3 + num1;
};
const plminusresult1 = plmin(100, 20, 40);
const plminusresult2 = plmin(400, 40, 60);
const plminusresult = plminusresult1 + plminusresult2 - plminusresult1;
console.log(plminusresult);
