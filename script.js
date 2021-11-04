function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;
    getResult = function () {
        let getresult = p*r*y
}
    console.log('If you deposit ' + p + ',');
    console.log('at an interest rate of ' + r + '.');
    console.log('You will receive an amount of ' + getResult + ',');
    console.log('in the year ' + r );
