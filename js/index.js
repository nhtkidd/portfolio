const canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d')

canvas.width = canvas.height = 128

resize();
window.onresize = resize;

function resize() {
    canvas.width = window.innerWidth * window.devicePixelRatio / 1
    canvas.height = window.innerHeight * window.devicePixelRatio / 1
    canvas.style.width = window.innerWidth + 'px'
    canvas.style.height = window.innerHeight + 'px'
}


function noise(ctx) {

    const w = ctx.canvas.width,
        h = ctx.canvas.height,
        iData = ctx.createImageData(w, h),
        buffer32 = new Uint32Array(iData.data.buffer),
        len = buffer32.length
    let i = 1

    for (; i < len; i++)

        if (Math.random() < 0.1) buffer32[i] = 0xffffffff;

    ctx.putImageData(iData, 0, 0);
}



(function loop() {
    noise(ctx);
    requestAnimationFrame(loop);
})();


document.addEventListener("DOMContentLoaded", function() {

    var mouseX = 0, mouseY = 0;
    var xp = 0, yp = 0;
    
    document.addEventListener("mousemove", function(e) {
      mouseX = e.pageX - 30;
      mouseY = e.pageY - 30;
    });
    
    setInterval(function() {
      xp += ((mouseX - xp) / 6);
      yp += ((mouseY - yp) / 6);
      document.querySelector("#circle").style.left = xp + "px";
      document.querySelector("#circle").style.top = yp + "px";
    }, 20);
  
  });
  