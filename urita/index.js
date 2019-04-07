// 操作したい要素を変数として定義しておく
// 1. 計算の種類(+, -, x, ÷)が何かを調べたい
// 2. 計算結果ボタンを押したときの挙動を書きたい
// HTML(DOM)のIDは document.getElementById('id名')で取得できる
// 参考: https://developer.mozilla.org/ja/docs/Web/API/Document/getElementById
const calc = document.getElementById('Calc')
const result = document.getElementById('Result')

// 四則演算の関数を定義していく
// 関数宣言は、下記で定義できる
// function 関数名() {
//    ここに関数の処理
// }
// 参考: https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Functions
// 足し算の関数を定義
function add(num1, num2) {
  return num1 + num2
}
// 引き算の関数を定義
function subtract(num1, num2) {
  return num1 - num2
}
// 掛け算の関数を定義
function multipled(num1, num2) {
  return num1 * num2
}
// 割り算の関数を定義
function division(num1, num2) {
  return num1 / num2
}

// ID="Calc" のセレクトボックスが変更されたときのイベントを定義する。
// ここでは、現在選択しているセレクトボックスのオプションを取得し、
// 取得した value を変数に格納しておきたい。
// (※取得した value は計算結果ボタンを押した時に、どの四則演算を行うかの判断材料としたい。)
let type = 'add'
calc.addEventListener('change', e => {
  const method = e.target.value
  type = method
})

// ID="Result" のボタンを押した時のイベントを定義する。
// 【inputに入力されている数字を取得する】
// [name="num1"]と[name="num2"]の value を取得する。
// document.querySelector で取得できる。
// 【実行する関数(四則演算)を条件分岐する】
// ここでは、ボタンを押したときに、現在選択されている四則演算の value を判断材料にし、
// 上で定義した四則演算の関数を実行し、計算結果をアラートで表現する。
// 四則演算ごとに実行する関数を定義したい場合は、条件分岐を行う必要がある。
// 一般的に複数の条件分岐がある場合は、switch文を用いるとよい。
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/switch

result.addEventListener('click', () => {
  const num1 = parseInt(document.querySelector('[name="num1"]').value, 10)
  const num2 = parseInt(document.querySelector('[name="num2"]').value, 10)

  switch (type) {
    case 'add':
      alert(add(num1, num2))
      break
    case 'subtract':
      alert(subtract(num1, num2))
      break
    case 'multipled':
      alert(multipled(num1, num2))
      break
    case 'division':
      alert(division(num1, num2))
      break
    default:
      break
  }
})
