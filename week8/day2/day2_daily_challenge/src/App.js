import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
      this.state ={
        languages : [
          {name: "php" , votes : 0},
          {name: "Python" , votes : 0},
          {name: "JavaScript" , votes : 0},
          {name: "java" , votes : 0}
        ]
    }
  }
  handeladd=(param)=>{
    this.state.languages[param].votes++;
    this.setState({languages: this.state.languages})
  }
  render(){
    return (
      <div >
          {
            this.state.languages.map((item ,i)=>{
              return(
                <div key={i}>
              {item.name} -- {item.votes}---
              <button onClick={()=>this.handeladd(i)}>ADD</button>
              </div>
              )
            })
          }
      </div>
    )
  }
}

export default App;
