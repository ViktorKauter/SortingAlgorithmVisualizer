import './App.css';
import RightPanel from './RightPanel/RightPanel';

var chosenOption="Sorting"

function App() {
  return (
    <div className='container'>
      <div className='leftPanel'>
        <div className='panelButton'> Sorting </div>
        
      </div>
      <div className='rightPanel'>
        <RightPanel/>
      </div>

    </div>

  );
}

export default App;
