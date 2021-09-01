

var output = document.querySelector("#output");
var principle = document.querySelector("#principle");
var rate = document.querySelector("#rate");
var time = document.querySelector("#time");
var num = document.querySelector("#num");
var calculate = document.querySelector(".calculate");


calculate.addEventListener('click',function calculate (){
    var CI = (principle.value*(Math.pow((1+(rate.value/(num.value*100))),(num.value*time.value))));
    console.log(principle.value);
    console.log(rate.value/100);
    console.log(time.value);
    console.log(CI);
    output.innerHTML = "Your Compound interest is :" + CI;
}
)