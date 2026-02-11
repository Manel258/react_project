
import './App.css';
import About from './components/about/About';
import ExoProps from './components/ExoProps';
import UseStateHooks from './components/UseStateHooks';
import ExoState from './components/ExoState';
import Effect from './components/Effect';
function App() {
  return (
    <div className="App">
      <About name={"Manel"} age={19}/>
      <ExoProps mod1={18} mod2={17}/>
      <UseStateHooks/>
      <ExoState/>
      <Effect/>
    </div>
  );
}

export default App;
