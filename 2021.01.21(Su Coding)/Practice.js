// const sum = function sum(num1, num2, num3) {
//   return num1 + num2 + num3;
// };
// const result1 = sum(10, 20, 30);
// const result2 = sum(40, 50, 60);
// const result = result1 + result2;
// console.log("총 합은" + result + "입니다.");

// function abc(alpha1, alpha2, alpha3) {
//   return alpha1 + alpha2 + alpha3;
// }
// const result1 = abc("a", "b", "c");
// const result2 = abc("d", "g", "g");
// const result = result1 + result2;
// console.log("1번은" + result + "입니다.");

// // 용어
// let num = 10 + 20;
// // let은 이미 Js에서 정의된 기능을 뜻하며 키워드(예약어)라고 지칭한다.
// // num은 식별자(변수명, 식별자)
// // =, + 연산자
// // 10, 20 표현식 30은 값이된다.

//화살표 함수(arrow function)
//-------------------------------------------------
// const pow = (x) => x * x;
// const result = pow(20);
// console.log(result);

//-------------------------------------------------
// const printpie = () => 3.14;
// const result = printpie();
// console.log(result);

// //-------------------------------------------------
// function outer(x) {
//   return function inter() {
//     return x * x;
//   };
// }
// //화살표 함수를 통해 단축해서 표현한다
// const outer = (x) => () => x * x;
// const innerfuc = outer(10);
// const result = innerfuc();
// console.log(result);

// //연산자 (+ , -) 와 표현식(10 + 20)
// //산술연산자(덧셈(+), 뺄셈(-), 곱셈(*), 나눗셈(/), 나머지(%)

// let hello = "안녕" + "하세요."
// console.log(hello);

//템플릿 문자열

// let str = `"여러분, '시작이 반이다.' 라는 말 들어보셨죠?"`;
// console.log(str);

let name1 = "철수";
let name2 = "영희";
let name3 = "재형";
let result = `${name1}는 ${name2}를 좋아합니다. 하지만 ${name3}는 ${name2}를 싫어합니다.`;
console.log(result);
