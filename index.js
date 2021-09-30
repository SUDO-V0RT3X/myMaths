function distance() {
    var aX = parseFloat(document.getElementById("daX").value)
    var aY = parseFloat(document.getElementById("daY").value)
    var bX = parseFloat(document.getElementById("dbX").value)
    var bY = parseFloat(document.getElementById("dbY").value)

    var answerField = document.getElementById("answer-field-d")
    var answer = parseFloat(
        Math.sqrt((bX - aX) * (bX - aX) + (bY - aY) * (bY - aY))
    )

    var anss = ((bX - aX) * (bX - aX))
    var ansss = ((bY - aY) * (bY - aY))
    var anssss = toString(anss + ansss)

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
        (bX - aX) + ")" +
        "<sup>2</sup>" +
        "+" + "(" +
        (bY - aY) + ")" +
        "<sup>2</sup>"

    var ansFour =
        "&#8730" +
        anss +
        " + " +
        ansss

    var ansFive = "&#8730" + anssss

    console.log(ansOne + ansTwo + ansThree + ansFour + ansFive + answer)
    answerField.innerHTML =
        ansOne +
        "</br>" +
        ansTwo +
        "</br>" +
        ansThree +
        "</br>" +
        ansFour +
        "</br>" +
        ansFive +
        "</br>" +
        answer

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
}