import {useRef, useEffect} from 'react'
import { drawCanvas, drawBoxes } from '../Methods';
import Data from '../Data';


var data = new Data(100);


function DummySort(){
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d')

        drawCanvas(canvas);
        drawBoxes(ctx, data.data, data.color)
        
        

      }, [])



    return <canvas ref={canvasRef}/>
}


export default DummySort;