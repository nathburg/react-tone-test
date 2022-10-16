import './App.css';
import * as Tone from 'tone';

function App() {
  const synth = new Tone.Synth().toDestination();


  return (
    <div className="App">
      <button onClick={() => 
        synth.triggerAttackRelease('C5', '8n')
      }>Click Me</button>

    </div>
  );
}

export default App;
