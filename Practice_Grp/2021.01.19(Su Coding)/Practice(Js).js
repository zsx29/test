// 변수에 저장된 데이터는 쉽게 다른 데이터로 변할 수 있다.
// 데이터는 값과 값의유형을 합한 것 이다.
// 변수는 num이 되고, 데이터는 3이 된다.
num = 3;
console.log(num);

// // js는 var, let, const 키워드를 사용해 변수의 명시적으로 선언하는 것을 권장한다.
var a = 12;
console.log(a);
var a = 20;
console.log(a);
// // var 선언은 선언을 다시해도 할당이 된다. (함께하는 작업에서는 위험성이 있다.)

let b = 12;
console.log(b);
let b = 20;
console.log(b);
// // 변수의 중복 선언이 되지않는다.(SyntaxError: Identifier 'b' has already been declared)

const c = 12;
console.log(c);
c = 20;
console.log(c);
// 변수의 중복 선언이 되지않는다. let과 다른점은 추가적으로 변수의 할당된 데이터가 변경되지 않는다. 최초로 선언하면 다른변수는 사용이 불가하다.(TypeError: Assignment to constant variable.)
// var, let 키워드는 변수, const 키워드는 변하지 않는 상수 선언이다.

// 1. 변수 이름은 카멜케이스 방법으로 작성합니다. 
// (카멜케이스 방법은 단어의 첫 글자는 소문자, 연결된 단어의 첫 글자는 대문자로 시작하는 방법이다.)
let userName = "Cafe682"; //(o)
let user_name = "Cafe682"; //(x)

// 2. 변수 이름은 _, $, 문자로만 시작한다.
let 19day = "월요일"; //(x) 숫자로 시작
let @day19 = "월요일"; //(x) _, $ 이외의 특수문자로 시작
let day19 = "월요일"; //(o) 문자로 시작
let _19day = "월요일"; //(o) _로 시작
let $19day = "월요일"; //(o) $로 시작

// 3. 상수나 축약어는 대문자와 언더바 방식으로 작성한다.
const HTML = "Hyper Text Markup Language";
const MAX_LEVEL = "99";

//4. 예약어는 사용할 수 없다. Ex) var, let, const, typeof 등등..
const var = "10"; //(x) var 변수는 선언 키워드로 변수 이름으로 지을 수 없다.

// 자료형 데이터에는 원시타입과, 참조타입이 있다.
// 원시 타입 - 숫자형(number), 문자열형(string), 논리형(boolean), null, undefined, symbol
let number = 1;
let str = "abc";
let bool = true;
let undi = undefined;
let nul = null;
let symbol = symbol();

// 참조 타입 - 배열(array) ,객체(object), 함수(function)
let array = []; //배열(object)
let obj = {}; // 객체(object)
let func = Function(){}; // 함수(function)

//1. 숫자형(number)
let infinity = 10 / 0;
let nan = 10 / "칠";
console.log(infinity,nan);

//2. 문자형(string)
let str = "'안녕하세여'";
let str = '"안녕하세여"';
console.log(str);
let str = "i'm find thank you \"and you?\"";
cossole.log(str);

//3. undefined , null

// 데이터 값이 지정되지 않았기 때문에 결과는 undefined 로 나온다 
let num;
console.log(num);

// 사용자가 의도적으로 데이터값을 비워놓았다는 의미이다.
let num ="null";
console.log(num);

//4. 논리형(boolean)
let bol = "true";
console.log(bol);
let bool1 = 5 < 6;
console.log(bool1);
let bool2 = 5 < 4;
console.log(bool2);

//5. 배열(array) let arr = [];
let arr = [10, 20, 30, 40];
console.log(arr);
//인덱스(index)는 배열이 가지고 있는 일종의 순서라고 생각하면 된다. Ex) [a, b ,c]는 순차적으로 0, 1, 2번이 된다.
let arr = [10, 20, 30, 40];
console.log(arr[3]);

let student1 = [90, 80, 70, 60];
console.log(student1[0]);
console.log(student1[1]);
console.log(student1[2]);
console.log(student1[3]);

//6. 객체(object) let obj = {키:값};
let obj = {math:90, english:80, phy:70, lol:30};
console.log(obj[math]);


//7. 함수(function)
// 함수선언식
function gugudan() {
  console.log("3 * 1 = 3");
  console.log("3 * 2 = 6");
  console.log("3 * 3 = 9");
  console.log("3 * 4 = 12");
  console.log("3 * 5 = 15");
  console.log("3 * 6 = 18");
  console.log("3 * 7 = 21");
  console.log("3 * 8 = 24");
  console.log("3 * 9 = 27");
}
gugudan();

// 함수표현식
const gugudan = function gugudan() {
  console.log("3 * 1 = 3");
  console.log("3 * 2 = 6");
  console.log("3 * 3 = 9");
  console.log("3 * 4 = 12");
  console.log("3 * 5 = 15");
  console.log("3 * 6 = 18");
  console.log("3 * 7 = 21");
  console.log("3 * 8 = 24");
  console.log("3 * 9 = 27");
}
gugudan();  
  