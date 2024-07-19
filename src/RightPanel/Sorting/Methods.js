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

export function wait(ms) {
    var start = Date.now(),
        now = start;
    while (now - start < ms) {
      now = Date.now();
    }
}


export function drawBoxes(ctx, data, colors){
    const boxwidth = ctx.canvas.width/data.data.length;

    var i = 0;
    // data.forEach(element => {
    //   ctx.fillStyle = '#FFFFFF'
    //   var boxheight=element/100*ctx.canvas.height;
    //   ctx.fillRect(i*boxwidth,ctx.canvas.height-boxheight , boxwidth, boxheight);
    //   i++
    // });
    for(var i=0;i<data.count;i++){
      if (data.colors.red[i]==0 && data.colors.blue[i]==0){
        ctx.fillStyle = '#FFFFFF'
      }
      if (data.colors.red[i]>0){
        data.colors.red[i]-=1
        ctx.fillStyle = '#C21E56'
      }

      if (data.colors.blue[i]>0){
        data.colors.blue[i]-=1
        ctx.fillStyle = '#088F8F'
      }
      var boxheight=data.data[i]/100*ctx.canvas.height;
      ctx.fillRect(i*boxwidth,ctx.canvas.height-boxheight , boxwidth, boxheight);

    }
}

