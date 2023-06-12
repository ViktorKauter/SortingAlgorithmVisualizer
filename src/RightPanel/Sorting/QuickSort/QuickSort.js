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
}

function handleCountChange(event){
    countOfElements=event.target.value;
}

function sortingStep(leftIndex,rightIndex){
    console.log("leftInput="+leftIndex+";rightInput="+rightIndex)
    //save values for later
    var leftInput=leftIndex;
    var rightInput=rightIndex;

    //termination condition
    if(leftIndex>=rightIndex){
        return;
    }
    const mid = Math.floor((rightInput+leftInput)/2)
    var pivot = sortingAlgorithmCanvas.getElement(mid);
    console.log("pivot="+pivot)
    console.log(sortingAlgorithmCanvas.getDataArray())

    while(leftIndex<rightIndex){
        while(sortingAlgorithmCanvas.getElement(leftIndex)<pivot){    
            leftIndex++;
        }

        while(sortingAlgorithmCanvas.getElement(rightIndex)>pivot && rightIndex>leftIndex){                
                rightIndex--;
        }

        //Swap if condition is met
        if(leftIndex<rightIndex){
            sortingAlgorithmCanvas.swapElements(leftIndex,rightIndex);
        } else {
            continue
        }
        sortingAlgorithmCanvas.drawToCanvas();
        //await new Promise(r => setTimeout(r, 50));

    }
        //console.log("rightIndex="+rightIndex)
        //console.log("rightInput="+rightInput)
        var meetingPoint=leftIndex;
        sortingStep(meetingPoint+1,rightInput)
        sortingStep(leftInput,meetingPoint)
        return;

    
}

export default QuickSort;