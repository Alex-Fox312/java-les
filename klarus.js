
// #2

function textMsg(msg) {
    document.getElementById('text').innerHTML = msg;
    document.getElementById('msg').style.display = 'block';
    document.getElementById('open').style.display = 'none';



}
function closeMsg() {
    document.getElementById('msg').style.display = 'none';
    document.getElementById('open').style.display = 'block';
}

// #3


function changeColor(newColor) {
    var elem = document.getElementById("para1");
    elem.style.color = newColor;
    elem.style.backgroundColor = 'black';
    elem.style.width = '200px';
}