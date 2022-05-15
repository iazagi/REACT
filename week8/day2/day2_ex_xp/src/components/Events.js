import React from 'react';
{/*const clickMe = () =>{
  alert("i was click");
}*/}
class Events extends React.Component {
  constructor(props) {
   super(props);
   this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
 }
 handleClick() {
   this.setState(prevState => ({
     isToggleOn: !prevState.isToggleOn
   }));
 }

  render() {
    return (
      <div>
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
      </div>
    )
  }
}
export default Events;
