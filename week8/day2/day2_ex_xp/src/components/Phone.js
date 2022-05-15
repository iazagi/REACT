import React from 'react';



class Phone extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020
   };
 }
 const changeColor= () =>{
   this.state.color = "red";
 } m
  render() {
    return (
      <div>
        <h1>My phone is a {this.state.brand}</h1>
        <p>it is a {this.state.color} {this.state.model} from {this.state.year}</p>
        <button onClick={'changeColor()'}>Change Color</button>
      </div>
    )
  }
}
export default Phone;
