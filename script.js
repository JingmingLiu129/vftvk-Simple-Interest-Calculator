function compute()
{
    var put1 = document.getElementById("principal");
    var rate1 = document.getElementById("rate");
    var years1 = document.getElementById("years");
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var div3 = document.getElementById("div3");
    var btn1 = document.getElementById("btn");
    var btn2 = document.getElementById("btn2");
    put1.onkeyup = function() {
        div1.innerText = put1.value;
    }
    rate1.onkeyup = function() {
        div2.innerText = rate1.value;
    }
    years1.onkeyup = function() {
            div3.innerText = years1.value;
        }
        //点击按钮,通过类样式的方式设置div的显示和隐藏
        // function compute() {
        //     console.log('1');
        //     bon2.classList.remove("bon2")
        // };
    var flag = true
    btn1.onclick = function() {
        if (flag) {
            bon2.style.display = 'none'
            flag = false
        } else {
            flag = true
            bon2.style.display = 'block'
        }
}
