import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import Child from './Child';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      prop_one: "prop one",
      prop_two: "prop two"
    }
  }
handleChange = (e) =>{
  this.setState({prop_one:e.target.value});
}
handleClick = (e) =>{
  this.setState({prop_two:this.state.prop_one})
}

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h2> simple redux exampole</h2>
          <p>prop_one = {this.state.prop_one}</p>
          <p>prop_two = {this.state.prop_two}</p>
          <p><input type='text' onChange={this.handleChange} /></p>
          <p><button onClick={this.handleClick}>change prop two</button></p>
          <Child/>
        </header>
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
  return {
    property_one_store: state.property_one
  }
}
const mapDispatchToProps = (dispatch) => {

}
export default connect(mapStateToProps,mapDispatchToProps)(App);
