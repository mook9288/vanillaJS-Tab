(function () {
  const resultButton = document.querySelector(".btn-result");
  const resultText = document.querySelector(".text-result");
  const inputWord = document.querySelector(".inp-word");
  const inputNumber = document.querySelector(".inp-number");
  const inputDirection = document.querySelector(".inp-direction");

  resultButton.addEventListener("click", handleClickEvent);

  function handleClickEvent() {
    if (!inputWord.value) {
      return alert("단어를 입력하세요.");
    }

    if (!inputNumber.value) {
      return alert("숫자를 입력하세요.");
    } else if (-100 > inputNumber.value || 100 <= inputNumber.value) {
      return alert("-100 <= N < 100\n-100과 100 사이의 정수를 입력하세요.");
    }

    if (!inputDirection.value) {
      return alert("방향을 입력하세요.");
    } else if (inputDirection.value.replace(/^[LRlr]$/, "")) {
      return alert("방향을 나타내는 L, R 의 대소문자만 입력 가능합니다.\n왼쪽으로 밀어낼 경우, L 또는 l\n오른쪽으로 밀어낼 경우, R 또는 r");
    }

    return resultText.textContent = inputWord.value;
  }
})();
