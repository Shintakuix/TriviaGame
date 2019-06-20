var questions = [{q: "this is question 1", a: "this is answer 1"} , {q: "this is question 2", a:"this is answer 2"}];
console.log(questions[0].q);
console.log(questions[1].q);
var rightAnswer = 0;
var wrongAnswer = 0;
var playerAnswers = [];
var right = false;



$("#first-question").text(questions[0].q);
$("#second-question").text(questions[1].q);

$("#finish").on("click",rungame);

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
    }
}

function rungame() {
    compareAnswer1();
    compareAnswer2();
    compareAnswer3();
    compareAnswer4();
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
document.getElementById("corrects").innerHTML = rightAnswer;
document.getElementById("incorrects").innerHTML = wrongAnswer;
    
}
    /*     if(right) {
        rightAnswer++;
    }
    else {
        wrongAnswer++;
    } */
        /* if (answerXD == questions[0].q || questions[1].q) {
            rightAnswer++;
        }
        if (answerXD !== questions[0].q || questions[1].q) {
            wrongAnswer++;
        } */


/* $( "input" ).on( "click", function() {
    $( "#log" ).html( $( "input:checked" ).val() + " is checked!" );
  }); */




