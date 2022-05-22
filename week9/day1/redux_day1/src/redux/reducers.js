const initState = {
  prop_one: "text prop one",
  prop_two: "text prop two"
}

export const reducer = (state=initState, action{})=> {
  switch(ation.type){
    case 'prop_one':
        return {...state,prop_one:action.paylod}
    default:
        return {...state}
  }
}
