var count=20;

var counter= setInterval(timer, 1000);
function reset(){
    count=20;
    counter= setInterval(timer, 1000);
    timer();
}
function timer(){
    count=count-1;

    if(count<=0){
        clearInterval(counter);
        reset()
    }
    console.log(count);
    $("#timer").text("Time left: " + count + " seconds")
}