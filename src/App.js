import './App.css';
import * as Tone from 'tone';
import { useCallback, useEffect } from 'react';



function App() {
  const synth = new Tone.PolySynth(Tone.Synth).toDestination();
  
  const letterToNote = {
    a: 'A4',
    s: 'B4',
    d: 'C4',
    f: 'D4',
    g: 'E4',
    h: 'F4',
    j: 'G4'
  };
  
  const handleKeyPress = (e) => synth.triggerAttackRelease(letterToNote[e.key], '8n');
  
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => console.log('render test');
  }, []);
  


  return (
    <div className="App">
      <button onClick={() => 
        synth.triggerAttackRelease('C5', '8n')
      }>Click Me</button>

    </div>
  );
}

export default App;



// export default function App() {
//   // handle what happens on key press
//   const handleKeyPress = useCallback((event) => {
//     console.log(`Key pressed: ${event.key}`);
//   }, []);

//   useEffect(() => {
//     // attach the event listener
//     document.addEventListener('keydown', handleKeyPress);

//     // remove the event listener
//     return () => {
//       document.removeEventListener('keydown', handleKeyPress);
//     };
//   }, [handleKeyPress]);

//   return (
//     <div>
//       <h1>Hello world</h1>
//     </div>
//   );
// }