var count=30;
var checkOff ={
"correct": 0,
"incorrect": 0,
}
var counter= setInterval(timer, 1000);
function reset(){
    count=30;
    counter= setInterval(timer, 1000);
    timer();
}
function timer(){
    count=count-1;

    if(count<1){
        alert('Times up!');
        reset()
    }

    $('#timer').text('Time left: ' + count + ' seconds')
}

timer();
$(document).ready(function(){
$('#done').on("click", function(){
    console.log("submitted");
    var answerSheet =[];
    var answer;
    var isChecked ={
        "one":$("#1B").is(":checked"),
        "two":$("#2C").is(":checked"),
        "three":$("#3A").is(":checked"),
        "four":$("#4C").is(":checked"),
        "five":$("#5C").is(":checked"),
    }
    console.log(isChecked);

answerSheet.push(isChecked.one);
answerSheet.push(isChecked.two);
answerSheet.push(isChecked.three);
answerSheet.push(isChecked.four);
answerSheet.push(isChecked.five);
console.log(answerSheet);
for(var i=0; i<answerSheet.length; i++){
    answer = answerSheet[i]
    console.log(answer)
    if(answer === true){
        checkOff.correct++;
    } else if(answer != true) {
        checkOff.incorrect++;
    }
}console.log(checkOff)
$("#spacer").append("<p class='answer-display'> Correct: " + checkOff.correct +"<br> Incorrect: "+ checkOff.incorrect + "</p>")
})
})
