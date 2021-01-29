let target = document.querySelector("#dynamic");

function randemString() {
  let stringArr = [
    "Is it complicated?",
    "Do you want to find it all at once?",
    "here it is!",
    "ALL flight Reservation!",
    "Are you looking for a cheap flight ticket?",
  ];
  let selectstring = stringArr[Math.floor(Math.random() * stringArr.length)];
  // stringArr의 문자에서 랜덤으로 수를 뽑아내는데 (Math.random() * stringArr.length)를 사용해 5미만의 수를 나오게 한다. 그리고 소수점을 지워버리기 위해 Math.floor라는 속성을 사용한다.
  let selectstringArr = selectstring.split("");
  // selectstring문자열을 "" 이 기준을 이용해서 배열로 분리시켜라 분리 시키게 되면 ["h", "e", "r", "e", " ", "i", "t", " ", "i", "s", "!"] 이런식으로 따로 나오게 된다.

  return selectstringArr;
}

// 타이핑 리셋
function resetTyping() {
  target.textContent = "";
  dynamic(randemString());
}

// 한글자씩 텍스트 출력 함수
function dynamic(randomArr) {
  console.log(randomArr);
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift();
    // shift라는 매소드가 randomArr이라는 배열이 있으면 배열에 있는 앞의 값부터 빼내서 출력하게 한다.
    setTimeout(function () {
      dynamic(randomArr);
    }, 80);
  } else {
    setTimeout(resetTyping, 3000);
  }
}

dynamic(randemString());

console.log(selectstring);
console.log(selectstringArr);
// 커서 깜빡임 효과
function blink() {
  target.classList.toggle("active");
}
setInterval(blink, 500);
