function getColor() {
    return (
      "#" +
      Math.random()
        .toString(16)
        .slice(2, 8)
    );
  }
  
  function setBackground() {
    var bgColor = getColor();
    document.body.style.background = bgColor;
  }
  setBackground();

  // runs function on click
document.body.onkeyup = function(e) {
    if (e.keyCode == 32) {
      setBackground();
    }
  };

var i = 0;
var txt = 'Welcome. I am HEXY, press the space bar!'; 
var speed = 150; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

//when the window loads, run this function
window.onload = function(){ 
    typeWriter(); 
  }