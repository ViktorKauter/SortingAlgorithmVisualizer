export default class SortingAlgorithmCanvas{
    constructor(context, data){
        this.ctx2=context;
        this.data=data;
        const count=data.length
        this.colors={}
        this.colors.red = Array.from({length: count},() => 0);
        this.colors.blue = Array.from({length: count},() => 0);
    }

    drawToCanvas(){
        this.drawCanvas(this.ctx2.canvas);
        const boxwidth = this.ctx2.canvas.width/this.data.length;

        var i = 0;
        /*
        this.data.forEach(element => {
            this.ctx.fillStyle = '#FFFFFF'
            var boxheight=element/100*this.ctx.canvas.height;
            this.ctx.fillRect(i*boxwidth,this.ctx.canvas.height-boxheight , boxwidth, boxheight);
            i++
        });
        */
        for(var i=0;i<this.data.length;i++){
            if (this.colors.red[i]==0 && this.colors.blue[i]==0){
              this.ctx2.fillStyle = '#FFFFFF'
            }
            if (this.colors.red[i]>0){
              this.colors.red[i]-=1
              this.ctx2.fillStyle = '#C21E56'
            }
      
            if (this.colors.blue[i]>0){
              this.colors.blue[i]-=1
              this.ctx2.fillStyle = '#088F8F'
            }
            var boxheight=this.data[i]/100*this.ctx2.canvas.height;
            this.ctx2.fillRect(i*boxwidth,this.ctx2.canvas.height-boxheight , boxwidth, boxheight);
      
          }

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
        this.colors.blue[i]=5
        return this.data[i];

    }

    getDataArray(){
        return this.data;
    }
    
    swapElements(i,j){
        var temp = this.data[i];  
        this.data[i]=this.data[j]; 
        this.data[j] = temp;
        this.colors.red[i]=20
        this.colors.red[j]=20
    }
}