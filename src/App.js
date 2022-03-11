import { useState } from 'react';
import './App.css';
import BoxForm from './components/BoxForm';
import Boxes from './components/Boxes';

function App() {
  const [colorBox, setColorBox] = useState("");
  const [colorBoxes, setColorBoxes] = useState([]);

  const handleColorBox = ( newColorBox ) => {
    setColorBox( newColorBox );
    setColorBoxes([...colorBoxes, newColorBox])
  }

  return (
    <div className="App">
      <BoxForm onNewBox={ handleColorBox } />
      <Boxes colorBox={ colorBox } colorBoxes={ colorBoxes } />
    </div>
  );
}

export default App;
