






var output = document.querySelector("#output");
var principle = document.querySelector("#principle");
var rate = document.querySelector("#rate");
var time = document.querySelector("#time");
var calculate = document.querySelector(".calculate")

calculate.addEventListener('click',function calculate (){
    var SI = (principle.value*rate.value*time.value)/100;
    output.innerText = "Your Simple Interest is: " + SI;
}
)
