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


// button
var button = document.getElementById('counter');
button.onclick = function () {
    // Create a request object
    var request = new XMLHttpRequest();
    
    // Capture the response and store it in a variable.
    request.onreadystatechange = function () {
        if(request.readyState === XMLHttprequest.DONE) {
        // Take some action
        if(request.status === 200) {
            var counter = request.responseText;
            var span = document.getElementById('counter');
            span.innerHTML = counter.toString();
        }
        }
    };
    // Make the request
    request.open('GET', 'http://shrishsinghal.imad.hasura-app.io/counter', true);
    request.send(null);
};