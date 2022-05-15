import logo from './logo.svg';
import './App.css';
import Car from './components/Car';
import Events from './components/Events';
import Phone from './components/Phone';

const carinfo = {name: "Ford", model: "Mustang"};

function App() {
  return (
    <div className="App">
       <Car name={carinfo.name} model={carinfo.model} />
       <Events/>

       <Phone/>
    </div>
  );
}

export default App;
