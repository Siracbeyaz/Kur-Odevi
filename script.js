var USD = 29.5;
var EUR = 32.7;
var GBP = 37.5;



function rateUSD() {
    document.getElementById("current").value = USD
}

function rateEUR() {
    document.getElementById("current").value = EUR
}

function rateGBP() {
    document.getElementById("current").value = GBP
}










function calculate(){
    var getcurrent = document.getElementById("current").value;
    var getamount = document.getElementById("amount").value;
}

var result = getcurrent() * getamount();
        document.getElementById("result").value = result;

function clear(){
    document.getElementById("form").reset   
}
