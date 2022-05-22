
const Fname = (props) =>{
  return(
    <>
      first name : <input type="text" name='fname' onChange={props.handleChange} />
    </>
  )
}

export default Fname;
