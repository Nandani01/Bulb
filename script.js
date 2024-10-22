var Bulb = document.querySelector('.Bulb')
var Btn = document.querySelector('Button');
var flag = 0
Btn.addEventListener('click', function () {
    if (flag == 0) {
        Bulb.style.backgroundColor = "PINK"
        console.log("ONN")
        flag = 1
    }
    else {

        Bulb.style.backgroundColor = "transparent"
        console.log("OFF")
        flag = 0
    }

})