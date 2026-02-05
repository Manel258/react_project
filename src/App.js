
import './App.css';
import Home from './components/Home';
import Contact from './contact/Contact';
import Service from './components/Service';
import About from './components/about/About';
function App() {
  return (
    <div className="App">
      <Home/>
      <Contact/>
      <Service/>
      <About name={"Manel"} age={19}/>
    </div>
  );
}

export default App;
