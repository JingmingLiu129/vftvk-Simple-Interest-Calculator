function compute()
{
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var y = document.getElementById("years").value;
    getResult = function () {
        let getresult = p*r*y
    }；
    alert('If you deposit ' + p + ',');
    alert('at an interest rate of ' + r + '.');
    alert('You will receive an amount of ' + getResult + ',');
    alert('in the year ' + r );
}；
