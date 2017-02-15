console.log('Loaded!');
var element = document.getElementById('main-text');


element.innerHTML = 'New Value';
var img = document.getElementById('madi');

marginLeft = 0;
function moveRight () {
 marginleft = marginleft + 5;
 img.style.marginLeft = marginleft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight, 50);
};