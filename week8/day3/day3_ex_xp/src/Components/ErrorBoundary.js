import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: null;
    }
  }
  componetDidCatch(error){
    console.log('I catch this error : '+ error);
    this.setState({error:error})
  }
  render(){
    if(this.state.error){
      return(
        <div>
          <h2> Somthing went worng !!!</h2>
        </div>
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
