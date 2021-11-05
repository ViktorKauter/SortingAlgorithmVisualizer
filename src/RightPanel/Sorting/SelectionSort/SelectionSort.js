import {useRef, useEffect} from 'react'
import { drawCanvas, drawBoxes } from '../Methods';
import Data from '../Data';
import DummySort from '../DummySort/DummySort';
import '../Sort.css';



var data = new Data(10000);
var startingElement = 0;
var countOfElements = 10000;
var switches = 0;
var switchLimit =20;


function SelectionSort(){
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
            
            
            if(startingElement<data.count && startingElement>=0){
                sortingStep(startingElement);
                startingElement++;
            }
            //console.log(startingElement);
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
    startingElement=0;
}

function reInitialize(){
    data = new Data(countOfElements);
}

function handleCountChange(event){
    countOfElements=event.target.value;
}

function sortingStep(sElement){
    var x = data.data[sElement];
    var j= sElement;
    var y;

    //find minimal Element in Remainder
    for(var i=sElement;i<data.data.length;i++){
        y = data.data[i]
        if(y<x){
            x =y;
            j= i;
        }
    }
    data.data[j]=data.data[sElement]; 
    data.data[sElement] = x;  
    switches++;
}

export default SelectionSort;