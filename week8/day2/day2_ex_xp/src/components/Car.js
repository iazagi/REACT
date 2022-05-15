
import React from 'react';
import Garage from './Garage';
class Car extends React.Component {
  constructor(props) {
   super(props);
   this.state = {color: "red"};
 }
  render() {
    return (
      <div>
        <Garage size="small"/>
        <h3>car make :{this.props.name}</h3>
        <h3>car model :{this.props.model}</h3>
        <h3>car color :{this.state.color}</h3>
      </div>
    )
  }
}
export default Car;
