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