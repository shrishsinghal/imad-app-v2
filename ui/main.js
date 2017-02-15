console.log('Loaded!');
var element = document.getElementById('main-text');

var img = document.getElementById('madi');

marginLeft = 0;
function moveRight () {
 marginLeft = marginLeft + 5;
 img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight, 50);
};