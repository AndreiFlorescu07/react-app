import logo from './logo.svg';
import Componenta1 from './components/Componenta1';
import { Componenta2, Componenta3 } from './components/Componenta2';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Componenta1 text="text12345" color="red" backgroundColor="blue" >text</Componenta1>
        <Componenta2  backgroundColor ="pink" color="red" text1={5} text2={3} >8 ceva</Componenta2>
        <Componenta3 />
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
