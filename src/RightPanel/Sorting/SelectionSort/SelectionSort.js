import {useRef, useEffect} from 'react'
import { drawCanvas, drawBoxes, wait } from '../Methods';
import Data from '../Data';
import DummySort from '../DummySort/DummySort';
import '../Sort.css';



var startingElement = 0;
var countOfElements = 200;
var data = new Data(countOfElements);
var switches = 0;
var switchLimit =1;


function SelectionSort(){
    const canvasRef = useRef(null)
    const ele = useRef(0)
    ele.current=0
    const min_ele = useRef(0)
    min_ele.current = 0;


    useEffect(() => {
        const render = () => {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d')
    
            if(switches == switchLimit){
                drawCanvas(canvas);
                drawBoxes(ctx, data, data.color);
                switches=0;
            }

            if(startingElement>=0){
                sortingStep(startingElement);
                wait(20)
                //startingElement++;
            }
            /*
            if(startingElement<data.count && startingElement>=0){
                sortingStep(startingElement);
                //startingElement++;
            }
            */
            
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

    function start(){
        startingElement=0;
    }
    
    function reInitialize(){
        data = new Data(countOfElements);
    }
    
    function handleCountChange(event){
        countOfElements=event.target.value;
    }
    
    async function sortingStep(sElement){
        if(sElement>countOfElements){return}
        var x = data.data[min_ele.current];
        //var j= sElement;
        var j = min_ele.current
        var y;
    
        var i=ele.current
        console.log(i)

        //find minimal Element in Remainder
        if (i<data.data.length-1){
            y = data.data[i]
            data.colors.blue[i]=1
            if(y<x){
                //x =y;
                //j= i;
                min_ele.current=i
            }
            ele.current+=1
            switches++
    
        } else {
            console.log("switch")
            console.log("data.length="+data.data.length)
            console.log("j="+j)
            console.log("sElement="+sElement)

            data.data[j]=data.data[sElement]; 
            data.data[sElement] = x;
            data.colors.red[sElement]=10
            data.colors.red[j]=10
            //await new Promise(r => setTimeout(r, 50));  
            switches++;
            startingElement++;
            ele.current=startingElement
            min_ele.current=startingElement
        }
    
        
    }
}



export default SelectionSort;