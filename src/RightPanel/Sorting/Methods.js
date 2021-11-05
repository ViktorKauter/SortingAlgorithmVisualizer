export function drawCanvas(canvas){
    fitToContainer(canvas);

    const ctx = canvas.getContext('2d')
    //Our first draw
    ctx.fillStyle = '#000000'
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}
function fitToContainer(canvas){
    // Make it visually fill the positioned parent
    canvas.style.width ='100%';
    canvas.style.height='100%';
    // ...then set the internal size to match
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }




export function drawBoxes(ctx, data, colors){
    const boxwidth = ctx.canvas.width/data.length;

    var i = 0;
    data.forEach(element => {
      ctx.fillStyle = '#FFFFFF'
      var boxheight=element/100*ctx.canvas.height;
      ctx.fillRect(i*boxwidth,ctx.canvas.height-boxheight , boxwidth, boxheight);
      i++
    });
}

