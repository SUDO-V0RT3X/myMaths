function distance() {
    var aX = parseFloat(document.getElementById("daX").value) || 0;
    var aY = parseFloat(document.getElementById("daY").value) || 0;
    var bX = parseFloat(document.getElementById("dbX").value) || 0;
    var bY = parseFloat(document.getElementById("dbY").value) || 0;
    var answerField = document.getElementById("answer-field-d")

    var doneX = (bX - aX) * (bX - aX)
    var doneY = (bY - aY) * (bY - aY)
    var doneA = doneX + doneY
    var answerF = parseFloat(
        Math.sqrt((bX - aX) * (bX - aX) + (bY - aY) * (bY - aY))
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

    var ansFour = "&#8730" + "&nbsp;" + doneX + " + " + doneY

    var ansFive = "&#8730" + "&nbsp;" + doneA

    answerField.innerHTML =
        ansOne +
        "<br>" +
        ansTwo +
        "</br>" +
        ansThree +
        "</br>" +
        ansFour +
        "</br>" +
        ansFive +
        "</br>" +
        answerF

    console.log(ansOne, '\n', ansTwo, '\n', ansThree, '\n', ansFour, '\n', ansFive)
}

function midpoint() {
    var aX = parseFloat(document.getElementById("maX").value) || 0;
    var aY = parseFloat(document.getElementById("maY").value) || 0;
    var bX = parseFloat(document.getElementById("mbX").value) || 0;
    var bY = parseFloat(document.getElementById("mbY").value) || 0;

    var answerField = document.getElementById("answer-field-m")
    var answerX = parseFloat(aX + bX)
    var answerY = parseFloat(aY + bY)
    var answerx = parseFloat(answerX / 2)
    var answery = parseFloat(answerY / 2)

    var ansOne = "(" + "Xa + Xb / 2 " + " ; " + " Ya + Yb / 2 " + ")"
    var ansTwo =
        "(" + aX + " + " + bX + "/ 2 " + " ; " + aY + " + " + bY + "/ 2 " + ")"
    var ansThree = "(" + answerX + " /2 " + " ; " + answerY + " /2 " + ")"
    var ansFour = "(" + answerx + " ; " + answery + ")"

    answerField.innerHTML =
        ansOne + "<br>" + ansTwo + "<br>" + ansThree + "<br>" + ansFour + "<br>"

    console.log(answerx + " ; " + answery)
}

function gradient() {
    var aX = parseFloat(document.getElementById("gaX").value) || 0;
    var aY = parseFloat(document.getElementById("gaY").value) || 0;
    var bX = parseFloat(document.getElementById("gbX").value) || 0;
    var bY = parseFloat(document.getElementById("gbY").value) || 0;

    var answerField = document.getElementById("answer-field-g")
    var answerX = parseFloat(bX - aX)
    var answerY = parseFloat(bY - aY)
    var answerF = parseFloat(answerY / answerX)

    var ansOne = "Yb - Ya " + " / " + "Xb- Xa"
    var ansTwo = bY + "-" + aY + " / " + bX + "-" + aX
    var ansThree = answerY + " / " + answerX
    var ansFour = answerF

    answerField.innerHTML =
        ansOne + "<br>" + ansTwo + "<br>" + ansThree + "<br>" + ansFour

    console.log(ansOne, '\n', ansTwo, '\n', ansThree, '\n', ansFour)
}

var navLinks = document.getElementById("hamburger")

function hideMenu() {
    hamburger.style.left = "-200vw"
}

function showMenu() {
    hamburger.style.left = "0vw"
}