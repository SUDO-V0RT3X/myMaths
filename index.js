function distance() {
    var aX = parseFloat(document.getElementById("daX").value)
    var aY = parseFloat(document.getElementById("daY").value)
    var bX = parseFloat(document.getElementById("dbX").value)
    var bY = parseFloat(document.getElementById("dbY").value)

    var answerField = document.getElementById("answer-field-d")
    var answer = parseFloat(
        Math.sqrt((bY - aY) * (bY - aY) + (bX - aX) * (bX - aX))
    )

    console.log(answer)
    answerField.innerHTML = answer
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