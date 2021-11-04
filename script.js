function compute()
{
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var y = document.getElementById("years").value;
    getResult = function () {
        let getresult = p*r*y
    }；
    alert.log('If you deposit ' + p + ',');
    alert.log('at an interest rate of ' + r + '.');
    alert.log('You will receive an amount of ' + getResult + ',');
    alert.log('in the year ' + r );
}；
