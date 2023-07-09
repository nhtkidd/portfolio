document.addEventListener("DOMContentLoaded", function() {

    var mouseX = 0, mouseY = 0;
    var xp = 0, yp = 0;
    
    document.addEventListener("mousemove", function(e) {
      mouseX = e.pageX -25;
      mouseY = e.pageY -0;
    });
    
    setInterval(function() {
      xp += ((mouseX - xp) / 6);
      yp += ((mouseY - yp) / 6);
      document.querySelector("#circle").style.left = xp + "px";
      document.querySelector("#circle").style.top = yp + "px";
    }, 20);
  
  });