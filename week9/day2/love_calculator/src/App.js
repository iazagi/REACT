import logo from './logo.svg';
import './App.css';
import Fname from './components/Fname';
import Sname from './components/Sname';
import Button from './components/Button';
import Resulat from './components/Resulat';


class App extends React.component{
  constructor(){
    super();
    this,state = {
      Fname:'',
      Sname:'',
      Resault: {}
    }
  }
  handelChange = (e) =>{
    this.setState({[e.target.name]:e.target.value})
  }
  handelClick = (e => {
    
  })
  return (
    <div className="App">
      <header className="App-header">
        <Fname handelChange={this.handelChange}/>
        <Sname handelChange={this.handelChange}/>
        <Button handelClick={this.handelClick}/>
        <Resulat/>
      </header>
    </div>
  );
}

export default App;
