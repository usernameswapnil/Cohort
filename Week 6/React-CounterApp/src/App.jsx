import {useState} from "react";

/*let state={
  count:0
}*/

function app(){
  const [count, setCount]=useState(0); //setCount is a function
  return(
    <div>
        <CustomButton count={count} setCount= {setCount} ></CustomButton>
        <CustomButton count={count+1} setCount={setCount}></CustomButton>
      
    </div>
  )
}

//component
function CustomButton(props){
  function onClickHandler(){
    props.setCount(props.count+1);
  }
  return(
    <button onClick={onClickHandler}>
    Counter {props.count}
  </button>
  )
  
   
}
export default app
