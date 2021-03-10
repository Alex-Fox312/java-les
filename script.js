function changeColor(newColor) {
    var elem = document.getElementById("nav-tab");
    elem.style.color = 'green';
    elem.style.backgroundColor = 'dark';
    elem.style.width = '200px';
    elem.onclick = "changeColor('#2bff00')";
}

