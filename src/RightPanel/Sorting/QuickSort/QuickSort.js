import {useRef, useEffect} from 'react'
import { drawCanvas, drawBoxes } from '../Methods';
import Data from '../Data';
import SortingAlgorithmCanvas from '../SortingAlgorithmCanvas';
import DummySort from '../DummySort/DummySort';
import '../Sort.css';


var countOfElements = 5;
var data = Array.from({length: countOfElements}, () => Math.floor(Math.random() * 100));

var sortingAlgorithmCanvas;

var leftIndex=0;
var rightIndex=countOfElements-1;
var middleIndex=rightIndex;
var switches = 0;
var switchLimit =1;
var context;

function QuickSort(){
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d') 
        context=ctx;       
        sortingAlgorithmCanvas = new SortingAlgorithmCanvas(ctx, data);
        console.log("initial")
        console.log(sortingAlgorithmCanvas.getDataArray())
        sortingStep(leftIndex,rightIndex)
        //sortingAlgorithmCanvas.drawToCanvas();




        // const render = () =>{
        //     const canvas = canvasRef.current;
        //     const ctx = canvas.getContext('2d')
    
        //     drawCanvas(canvas);
        //     drawBoxes(ctx, data.data, data.color);
            
        //     //console.log("left="+leftIndex)
        //     //console.log("switches="+switches)


        //     sortingStep(leftIndex,middleIndex,rightIndex)

        //     requestAnimationFrame(render);
        // }
        // render();
        
        

      }, [])



    return(
    <div className='flexContainer'>
    <div className='buttonsWrapper'>
        <button onClick={start}>Run</button>
        <button onClick={reInitialize}>Re-Initialize</button>
        Number of Elements:
        <input type='number' min="10" max="500"
        onChange={handleCountChange}></input>
        <div className='leftBox'>x</div>
    </div>
    <div className='canvasWrapper'>    
        <canvas ref={canvasRef}/>
    </div>
    </div>
    
    )
}

function start(){
}

function reInitialize(){
    data = Array.from({length: countOfElements}, () => Math.floor(Math.random() * 100));
    leftIndex=0;
    rightIndex=data.length-1;
    middleIndex=rightIndex;
    sortingAlgorithmCanvas = new SortingAlgorithmCanvas(context, data);
    sortingStep(leftIndex,rightIndex)
    console.log("initial")
    console.log(sortingAlgorithmCanvas.getDataArray())
}

function handleCountChange(event){
    countOfElements=event.target.value;
}

function sortingStep(leftIndex,rightIndex){
    //save values for later
    var leftInput=leftIndex;
    var rightInput=rightIndex;

    //termination condition
    if(leftIndex==rightIndex){
        return;
    }

    middleIndex=Math.floor((rightIndex-leftIndex)/2+leftIndex)
    var middleValue = sortingAlgorithmCanvas.getElement(middleIndex);

    while(leftIndex<rightIndex){

        
        //console.log("rightIndexFirst="+rightIndex)
        while(sortingAlgorithmCanvas.getElement(leftIndex)<middleValue 
        && leftIndex <rightIndex){
            
            leftIndex++;
        }

        while(sortingAlgorithmCanvas.getElement(rightIndex)>=middleValue 
            && leftIndex <rightIndex){                
                rightIndex--;
        }

        //console.log("rightIndex="+rightIndex)
        //console.log("leftIndex before:"+leftIndex)

  


        console.log("("+leftInput+";"+rightInput+")"+middleIndex+"="+middleValue+"("+leftIndex+";"+rightIndex+")")
        console.log("before")
        console.log(sortingAlgorithmCanvas.getDataArray())

        //Swap if condition is met
        sortingAlgorithmCanvas.swapElements(leftIndex,rightIndex);
        

        console.log("after")
        console.log(sortingAlgorithmCanvas.getDataArray())
        sortingAlgorithmCanvas.drawToCanvas();

        //await new Promise(r => setTimeout(r, 50));
        console.log("draw");
    }

    
    if(leftIndex === rightIndex){
        console.log("meet!")
        //new middleIndex
        var meetingPoint=rightIndex;
        sortingStep(meetingPoint+1,rightInput)
        sortingStep(leftInput,meetingPoint)
        //sortingStep(meetingPoint+1,rightInput,rightInput)
        return;
    }

    
}

export default QuickSort;