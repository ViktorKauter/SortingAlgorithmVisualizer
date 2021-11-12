import {useRef, useEffect} from 'react'
import { drawCanvas, drawBoxes } from '../Methods';
import Data from '../Data';
import DummySort from '../DummySort/DummySort';
import '../Sort.css';



var data = new Data(100);
var countOfElements = 100;

var leftIndex=0;
var rightIndex=99;
var middleIndex=rightIndex;
var switches = 0;
var switchLimit =1;

function QuickSort(){
    const canvasRef = useRef(null)

    useEffect(() => {
        const render = () =>{
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d')
    
            drawCanvas(canvas);
            drawBoxes(ctx, data.data, data.color);
            
            //console.log("left="+leftIndex)
            //console.log("switches="+switches)


            sortingStep(leftIndex,middleIndex,rightIndex)

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
    leftIndex=0;
    rightIndex=data.data.length-1;
    middleIndex=rightIndex;
}

function handleCountChange(event){
    countOfElements=event.target.value;
}

function sortingStep(){

    var middleValue = data.data[middleIndex];
    console.log("rightIndexFirst="+rightIndex)

    while(data.data[rightIndex]>=middleValue 
        && leftIndex <rightIndex){
            
            rightIndex--;
    }

    console.log("rightIndex="+rightIndex)

    console.log("leftIndex before:"+leftIndex)

    while(data.data[leftIndex]<middleValue 
        && leftIndex <rightIndex){
            
            leftIndex++;
            switches++;
    }
    console.log("leftIndex"+leftIndex)
    console.log("switches:"+switches)


    
    if(leftIndex === rightIndex){
        console.log("meet!")
        //new middleIndex
        middleIndex = rightIndex-1
        leftIndex = 0;
        return;
    }

    
    //swap elements
    var x = data.data[leftIndex];  
    data.data[leftIndex]=data.data[rightIndex]; 
    data.data[rightIndex] = x;
    //switches++;
    console.log("switches:"+switches)
    
}

export default QuickSort;