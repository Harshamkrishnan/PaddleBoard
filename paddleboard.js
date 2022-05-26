function validate()
{
    var n= document.forms["form1"]["text1"].value;
    if (n == "")
    {
        alert("Please enter your name!!");
        return false;
    }
    else
    {
        window.location.href = `html/welcome.html?name=${n}`;
        // file:///C:/UsersharshOneDriveDesktopPaddleBoardhtmlwelcome.html
        return true;
    }
}

function welcome() {
    var url=window.location.href
    console.log(url.split('?'))
    var param = url.split('?')[1]
    console.log(param)
    var name = param.split('=')[1]
    console.log(name)
    document.getElementById("demo").innerHTML = "Welcome " + name;

}

let paddle1 = document.getElementById('paddle1');
/*let paddle2 = document.getElementsByClassName('.paddle2');*/
let moveBy = 100;


window.addEventListener('keyup', (e) =>{
    console.log(`event called ${e.key}`);
    console.log(`Left position: ${paddle1.offsetTop}`);
    let newPos = 0;
    switch(e.key){
        case 'ArrowLeft' :
            moveLeft(paddle1)
            break;
        case 'ArrowRight' :
            moveRight(paddle1)
            // paddle1.focus();
            // newPos = parseInt(paddle1.style.left) + moveBy;
            // console.log(`Arrow right called ${newPos}`);
            // paddle1.style.left = newPos;
            break;
        case 'ArrowUp' :
            moveUp(paddle1)
            // paddle1.focus();
            // newPos = parseInt(paddle1.style.top) + moveBy;
            // console.log(`Arrow up called ${newPos}`);
            // paddle1.style.left = newPos;
            break;
        case 'ArrowDown' :
            moveDown(paddle1)
            // paddle1.focus();
            // newPos = parseInt(paddle1.style.top) - moveBy;
            // console.log(`Arrow down called ${newPos}`);
            // paddle1.style.left = newPos;
            break;
        case 'Default' :
            break;
    }

    function moveLeft(element) {
        element.focus();
        newPos = parseInt(element.offsetLeft) - moveBy;
        newPos < 0 ? 0 : newPos
        console.log(`Arrow left called ${newPos}`);
        element.style.left = `${newPos}px`;
    }

    function moveRight(element) {
        element.focus();
        newPos = parseInt(element.offsetLeft) + moveBy;
        console.log(`Arrow Right called ${newPos}`);
        element.style.left = `${newPos}px`;
    }
    function moveUp(element) {
        element.focus();
        newPos = parseInt(element.offsetTop) + moveBy;
        newPos < 0 ? 0 : newPos
        console.log(`Arrow Up called ${newPos}`);
        element.style.top = `${newPos}px`;
    }
    function moveDown(element) {
        element.focus();
        newPos = parseInt(element.offsetTop) - moveBy;
        newPos < 0 ? 0 : newPos
        console.log(`Arrow Down called ${newPos}`);
        element.style.top = `${newPos}px`;
    }
})