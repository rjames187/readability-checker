import './App.css';
import './components/Header';
import './components/Info';
import Header from './components/Header';
import Calc from './components/Calc';

function App() {
  return (
    <div className="App">
      <div id="content">
        <Header></Header>
        <Calc></Calc>
      </div>
    </div>
  );
}

export default App;
