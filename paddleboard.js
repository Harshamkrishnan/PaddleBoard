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
        window.location.href = `C:\\Users\\harsh\\OneDrive\\Desktop\\PaddleBoard\\html\\welcome.html?name=${n}`;
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

// window.addEventListener('load', () =>{
//     paddle1.style.position = 'absolute';
//     paddle1.style.left = 0;
//     paddle1.style.top = 0;
//     /*paddle2.position = 'absolute';
//     paddle2.right = 0;
//     paddle2.top = 0;*/
// });

window.addEventListener('keyup', (e) =>{
    console.log(`event called ${e.key}`);
    console.log(paddle1.style.left);
    let newPos = 0;
    switch(e.key){
        case 'ArrowLeft' :
            newPos = parseInt(paddle1.style.left) - moveBy;
            console.log(`Arrow left called ${newPos}`);
            paddle1.style.left = newPos;
            break;
        case 'ArrowRight' :
            newPos = parseInt(paddle1.style.left) + moveBy;
            console.log(`Arrow right called ${newPos}`);
            paddle1.style.left = newPos;
            break;
        case 'ArrowUp' :
            newPos = parseInt(paddle1.style.top) + moveBy;
            console.log(`Arrow up called ${newPos}`);
            paddle1.style.left = newPos;
            break;
        case 'ArrowDown' :
            newPos = parseInt(paddle1.style.top) - moveBy;
            console.log(`Arrow down called ${newPos}`);
            paddle1.style.left = newPos;
            break;
        case 'Default' :
            break;
    }
})