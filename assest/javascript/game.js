var rightAnswer = 0;
var wrongAnswer = 0;
var leftblank = 0;
var playerAnswers = [];
var right = false;
var number = 60;
var intervalId;


    $("#question1").hide();
    $("#question2").hide();
    $("#question3").hide();
    $("#question4").hide();
    $("#finish").hide();
    $("#cor").hide();
    $("#inc").hide();
    $("#lef").hide();
    $("#restart").hide();

$("#start").on("click", run);

function run() {
    $("#start").hide();
    $("#show-number").html("<h2>60</h2>");
    $("#question1").show();
    $("#question2").show();
    $("#question3").show();
    $("#question4").show();
    $("#finish").show();
   
clearInterval(intervalId);
intervalId = setInterval(decrement, 1000);


function decrement() {

    number--;

    $("#show-number").html("<h2>" + number + "</h2>");

    if (number === 0) {

    clearInterval(intervalId);
    rungame();    
    alert("Time Up!");
    $("#show-number").html("timeup");
    }
}
}

$("#finish").on("click",rungame);
clearInterval(intervalId);

function compareAnswer1() {
    answerXD = document.getElementById("question1").getElementsByTagName("input");
    console.log(answerXD[0].value);
    console.log(answerXD[1].value);
    console.log(answerXD[2].value);
    console.log(answerXD[3].value);

    for (i = 0 ; i < answerXD.length; i++) {
        if (answerXD[i].checked == true) {
            console.log(answerXD[i].value);
            playerAnswers.push(answerXD[i].value);
            console.log(playerAnswers);
        }
       /*  else {
            playerAnswers[0] = "wrong";
        } */
    }
}
function compareAnswer2() {
    answerXD = document.getElementById("question2").getElementsByTagName("input");
    console.log(answerXD[0].value);
    console.log(answerXD[1].value);
    console.log(answerXD[2].value);
    console.log(answerXD[3].value);
    
    for (i = 0 ; i < answerXD.length; i++) {
        if (answerXD[i].checked == true) {
            console.log(answerXD[i].value);
            playerAnswers.push(answerXD[i].value);
            console.log(playerAnswers);
        }
  /*       else {
            playerAnswers[1] = "wrong";
        } */
    }
}

function compareAnswer3() {
    answerXD = document.getElementById("question3").getElementsByTagName("input");
    console.log(answerXD[0].value);
    console.log(answerXD[1].value);
    console.log(answerXD[2].value);
    console.log(answerXD[3].value);
    
    for (i = 0 ; i < answerXD.length; i++) {
        if (answerXD[i].checked == true) {
            console.log(answerXD[i].value);
            playerAnswers.push(answerXD[i].value);
            console.log(playerAnswers);
        }
/*         else {
            playerAnswers[2] = "wrong";
        } */
    }
}

function compareAnswer4() {
    answerXD = document.getElementById("question4").getElementsByTagName("input");
    console.log(answerXD[0].value);
    console.log(answerXD[1].value);
    console.log(answerXD[2].value);
    console.log(answerXD[3].value);
    
    for (i = 0 ; i < answerXD.length; i++) {
        if (answerXD[i].checked == true) {
            console.log(answerXD[i].value);
            playerAnswers.push(answerXD[i].value);
            console.log(playerAnswers);
        }
/*         else {
            playerAnswers[3] = "wrong";
        } */
    }
}

function rungame() {


    $("#start").hide();
    $("#show-number").hide();
    $("#question1").hide();
    $("#question2").hide();
    $("#question3").hide();
    $("#question4").hide();
    $("#finish").hide();
    $("#restart").show();
    $("#inc").show();
    $("#cor").show();
    $("#lef").show();

    compareAnswer1();
    compareAnswer2();
    compareAnswer3();
    compareAnswer4();

    console.log(playerAnswers);
    if (playerAnswers[0] == "right") {
        rightAnswer++;
    }
    if (playerAnswers[0] == "wrong") {
        wrongAnswer++;
    }
    if (playerAnswers[1] == "right") {
        rightAnswer++;
    }
    if (playerAnswers[1] == "wrong") {
        wrongAnswer++;
    }
    if (playerAnswers[2] == "right") {
        rightAnswer++;
    }
    if (playerAnswers[2] == "wrong") {
        wrongAnswer++;
    }
    if (playerAnswers[3] == "right") {
        rightAnswer++;
    }
    if (playerAnswers[3] == "wrong") {
        wrongAnswer++;
    }
document.getElementById("corrects").innerHTML = rightAnswer;
document.getElementById("incorrects").innerHTML = wrongAnswer;
document.getElementById("leftblank").innerHTML = 4 - (rightAnswer + wrongAnswer);
    rightAnswer = 0;
    wrongAnswer = 0;
    playerAnswers = [];    
}

$("#restart").on("click",restart);

function restart() {
    location.reload();
}




