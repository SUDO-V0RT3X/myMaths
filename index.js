function answer() {
  var aX = parseFloat(document.getElementById("aX").value)
  var aY = parseFloat(document.getElementById("aY").value)
  var bX = parseFloat(document.getElementById("bX").value)
  var bY = parseFloat(document.getElementById("bY").value)

  var answerField = document.getElementById("answer-field")
  var answer = parseFloat(
    Math.sqrt((bY - aY) * (bY - aY) + (bX - aX) * (bX - aX))
  )

  console.log(answer)
  answerField.innerHTML = answer
}
