window.onload = function(){
  const buttons = document.querySelectorAll("button");//数字,四則演算ボタン
  let displayArea = document.querySelector("input");//計算画面
  let textAffter = '';
//押したボタンのvalueを取って画面に表示くる-----------------------------------
  function numberDisplay(event){
   const text = event.target.value;
   textAffter = textAffter + text;
   displayArea.value = textAffter;
  };
  buttons.forEach(function(button){
    button.addEventListener("click",numberDisplay);
  });
//イコールボタンで計算結果表示------------------------------------------------
buttons[16].onclick = function result(){
    displayArea.value = eval(textAffter);
    textAffter = eval(textAffter)//画面上に計算結果後の値が残るようにする。
};
//Cボタンでリセット
let resetButton = document.getElementById("reset");
resetButton.onclick = function(){
  textAffter = '';
  displayArea.value = textAffter;
}
};
