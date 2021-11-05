import SelectionSort from "./Sorting/SelectionSort/SelectionSort";
import './RightPanel.css';
import QuickSort from "./Sorting/QuickSort/QuickSort";


function RightPanel() {
    return (

      <div className='RightPanel-ContainerDiv' >
          <div className='flexDiv'>
            <SelectionSort/>
          </div>
          <div className='flexDiv'>
            <QuickSort/>
          </div>
      </div>


      
  
    );
  }
  
  export default RightPanel;