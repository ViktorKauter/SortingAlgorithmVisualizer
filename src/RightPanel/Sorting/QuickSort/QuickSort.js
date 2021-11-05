import {useRef, useEffect} from 'react'
import { drawCanvas, drawBoxes } from '../Methods';
import Data from '../Data';
import DummySort from '../DummySort/DummySort';
import '../Sort.css';



var data = new Data(100);
var countOfElements = 100;

var indexes = new Object();
indexes.leftIndex=0;
indexes.rightIndex=data.data.length-1;
indexes.middleIndex=indexes.rightIndex;

var switches = 0;
var switchLimit =1;

function QuickSort(){
    const canvasRef = useRef(null)

    useEffect(() => {
        const render = () =>{
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d')
    
            if(switches == switchLimit){
                drawCanvas(canvas);
                drawBoxes(ctx, data.data, data.color);
                switches=0;
            }
            
            console.log("left="+indexes.leftIndex)

            sortingStep(indexes.leftIndex,indexes.middleIndex,indexes.rightIndex)

            requestAnimationFrame(render);
        }
        render();
        
        

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
    data = new Data(countOfElements);
    indexes.leftIndex=0;
    indexes.rightIndex=data.data.length-1;
    indexes.middleIndex=indexes.rightIndex;
}

function handleCountChange(event){
    countOfElements=event.target.value;
}

function sortingStep(leftIndex,middleIndex,rightIndex){

    var middleValue = data.data[indexes.middleIndex];
    
    while(data.data[indexes.rightIndex]>=indexes.middleValue 
        && indexes.leftIndex <indexes.rightIndex){
            indexes.rightIndex = indexes.rightIndex - 1;
    }

    while(data.data[indexes.leftIndex]<indexes.middleValue 
        && indexes.leftIndex <indexes.rightIndex){
        indexes.leftIndex = indexes.leftIndex - 1;;
    }
    
    if(indexes.leftIndex == indexes.leftIndex){
        //new middleIndex
        indexes.middleIndex = indexes.rightIndex-1
        indexes.leftIndex = 0;
        return;
    }

    
    //swap elements
    var x = data.data[indexes.leftIndex];  
    data.data[indexes.leftIndex]=data.data[indexes.rightIndex]; 
    data.data[indexes.rightIndex] = x;
    switches++;
}

export default QuickSort;