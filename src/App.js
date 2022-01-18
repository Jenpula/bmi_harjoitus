import './App.css';
import {useState} from 'react';

function App() {

  const [Weight, setWeight] = useState(0);
  const [Height, setHeight] = useState(0);
  const [Vastaus, setVastaus] = useState(0);

  function calculate(e) {
    e.preventDefault();
    const tulos = Weight/(Height*Height);
    setVastaus(tulos);
  }

  return (
    <div className="App">
      <form onSubmit={calculate}>
      <h2>Calculating body mass index</h2>
      <div>
        <label>Height</label>
        <input type='number' value={Height} onChange={e => setHeight(e.target.value)}></input>
      </div>
      <div>
        <label>Weight</label>
        <input type='number' value={Weight} onChange={e => setWeight(e.target.value)}></input>
      </div>
      <div>
        <label>Vastaus</label>
        <output>{Vastaus.toFixed(2)}</output>
      </div>
      <button>Laske</button>
      </form>
    </div>
  );
}

export default App;
