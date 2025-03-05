//Prop drilling in React refers to the process of passing data (props) from a parent component down to deeply nested child components through multiple intermediate components, even if those intermediate components do not directly use the data. This can lead to unnecessary complexity and reduced maintainability.
// IT IS VERY IMPORTANT INTERVIEW QUESTION
import {useState} from "react";
function App(){
  const[count,setCount]=useState(0);
  return(
    <div>
      <Count count={count} setCount={setCount}></Count>
      
    </div>
  )
}
function Count({count,setCount}){ 
  //process of passing data (props) (here setCount) from a parent component down to deeply nested child components through multiple intermediate components, even if those intermediate components do not directly use the data. This can lead to unnecessary complexity and reduced maintainability.
  return(
    <div>
      {count}
      <Buttons count={count} setCount={setCount}></Buttons>
    </div>
  )
}
function Buttons({count,setCount}){
  return(
    <div>
      <button onClick={function(){
        setCount(count+1);
      }}>
        Increase
      </button> <br /><br />

      <button onClick={function(){
        setCount(count-1);
      }}>
        Decrease
      </button>
    </div>
  )
}
export default App;