export default class SortingAlgorithmCanvas{
    constructor(context, data){
        this.ctx=context;
        this.data=data;
    }

    drawToCanvas(){
        this.drawCanvas(this.ctx.canvas);
        const boxwidth = this.ctx.canvas.width/this.data.length;

        var i = 0;
        this.data.forEach(element => {
            this.ctx.fillStyle = '#FFFFFF'
            var boxheight=element/100*this.ctx.canvas.height;
            this.ctx.fillRect(i*boxwidth,this.ctx.canvas.height-boxheight , boxwidth, boxheight);
            i++
        });

    }

    drawCanvas(canvas){
        this.fitToContainer(canvas);
        const ctx = canvas.getContext('2d')
        //Our first draw
        ctx.fillStyle = '#000000'
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    }
    
    fitToContainer(canvas){
        // Make it visually fill the positioned parent
        canvas.style.width ='100%';
        canvas.style.height='100%';
        // ...then set the internal size to match
        canvas.width  = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
  } 

    getElement(i){
        return this.data[i];
    }

    getDataArray(){
        return this.data;
    }
    
    swapElements(i,j){
        var temp = this.data[i];  
        this.data[i]=this.data[j]; 
        this.data[j] = temp;
    }
}