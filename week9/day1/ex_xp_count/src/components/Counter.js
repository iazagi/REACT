import {connect} from 'react-redux';
import {increaseCount,decreaseCount} from '../redux/action';


const Counter = (props) =>{
    return(
      <div>
       <button onClick={props.increase}>+</button>
       <p>{props.count}</p>
       <button onClick={props.decrease}>-</button>
      </div>
    )
}

const mapStateToProps = (state) => {
  return{
    count: state.count
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    increase: () => dispatch(increaseCount()),
    decrease: () => dispatch(decreaseCount())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
