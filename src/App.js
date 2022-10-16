import './App.css';
import './components/Header';
import './components/Info';
import Header from './components/Header';
import Calc from './components/Calc';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
      <div id="content">
        <Header></Header>
        <Calc></Calc>
        <Info></Info>
      </div>
    </div>
  );
}

export default App;
