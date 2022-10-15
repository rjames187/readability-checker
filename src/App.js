import './App.css';
import './components/Header';
import './components/Info';

import Calc from './components/Calc';

function App() {
  return (
    <div className="App">
      <div id="content">
        <Calc></Calc>
      </div>
    </div>
  );
}

export default App;
