function distance() {
  var aX = parseFloat(document.getElementById("daX").value)
  var aY = parseFloat(document.getElementById("daY").value)
  var bX = parseFloat(document.getElementById("dbX").value)
  var bY = parseFloat(document.getElementById("dbY").value)

  var answerField = document.getElementById("answer-field-d")
  var answer = parseFloat(
    Math.sqrt((bY - aY) * (bY - aY) + (bX - aX) * (bX - aX))
  )
  var ansOne =
    "&#8730" +
    "(Xb - Xa)" +
    "<sup>2</sup>" +
    " " +
    "+" +
    " " +
    "(Yb - Ya)" +
    "<sup>2</sup>"

  var ansTwo =
    "&#8730" +
    "(" +
    bX +
    "-" +
    aX +
    ")" +
    "<sup>2</sup>" +
    " " +
    "+" +
    "(" +
    bY +
    "-" +
    aY +
    ")" +
    "<sup>2</sup>"

  var ansThree =
    "&#8730" +
    "(" +
    (bX - aX) +
    ")" +
    "<sup>2</sup>" +
    "+" +
    "(" +
    (bY - aY) +
    ")" +
    "<sup>2</sup>"

  var ansFour =
    "&#8730" +
    "(" +
    (bX - aX) * (bX - aX) +
    ")" +
    " + " +
    "(" +
    (bY - aY) * (bY - aY) +
    ")"

  /*fix ansFive :

  -var for (bx - ax) squared
  -same for y values 
  -problem: above is being converted to string and appended to each ohter instead of being calculated
  */

  var ansFive =
    "&#8730" +
    "(" +
    parseFloat((bX - aX) * (bX - aX)) +
    parseFloat((bY - aY) * (bY - aY)) +
    ")"

  console.log(ansOne + ansTwo + ansThree)
  answerField.innerHTML =
    ansOne +
    "</br>" +
    ansTwo +
    "</br>" +
    ansThree +
    "</br>" +
    ansFour +
    "</br>" +
    ansFive

  //answerField.innerHTML = answer
}

function midpoint() {
  var aX = parseFloat(document.getElementById("maX").value)
  var aY = parseFloat(document.getElementById("maY").value)
  var bX = parseFloat(document.getElementById("mbX").value)
  var bY = parseFloat(document.getElementById("mbY").value)

  var answerField = document.getElementById("answer-field-m")
  var answerx = parseFloat((aX + bX) / 2)
  var answery = parseFloat((aY + bY) / 2)

  console.log(answerx + " ; " + answery)
  answerField.innerHTML = answerx + " ; " + answery
}
