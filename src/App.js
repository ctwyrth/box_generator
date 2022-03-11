import { useState } from 'react';
import './App.css';
import BoxForm from './components/BoxForm';
import Boxes from './components/Boxes';

function App() {
  const [colorBoxes, setColorBoxes] = useState("");

  const colorBox = ( newColorBox ) => {
    setColorBoxes( newColorBox );
  }

  return (
    <div className="App">
      <BoxForm onNewBox={ colorBox } />
      <Boxes newBoxes={ colorBoxes } />
    </div>
  );
}

export default App;
