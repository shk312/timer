//複数の関数で使用する変数
let finish
let intervalId
let startButton = document.querySelector("#start-button")
startButton.addEventListener("click", startTimer)
let stopButton = document.querySelector("#stop-button")
stopButton.addEventListener("click", stopTimer)


// タイマーを開始する
function startTimer(){
  let second = document.querySelector("#time-input").value

  //start + タイマーの時間を足すと終了時間
  finish = Date.now() + second * 1000

  intervalId = setInterval(checkRemainingTime, 50)

  //スタートボタンの無効か
  startButton.disabled = true
} 

// タイマーを終了する
function stopTimer(){
  clearInterval(intervalId)

  //残り時間をリセットする
  setDisplay(0)

  //スタートボタンの有効か
  startButton.disabled = false
}

//残り時間をチェックする繰り返し
function checkRemainingTime(){
  let remain = finish - Date.now()

  //残り時間を表示する
  let second = Math.floor(remain/1000) + 1
  setDisplay(second)

  //タイマーがなくなれば終了
  if (remain <= 0) {
    stopTimer()
    alert("時間になりました")
  }
}

//残り時間を表示する
function setDisplay(second){
  let countDown = document.querySelector("#count-down")
  countDown.textContent = second
}