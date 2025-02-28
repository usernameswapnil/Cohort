import {useState, useCallback} from "react"

import {ChildComponent} from './Components/ChildComponent'
function App(){
  const[count,setCount]=useState(0);

  //useCallback(function buttonHandler(){
    //setCount(count+1);
  //},[count])
  const buttonHandler=useCallback(function(){
    setCount(count+1)
  },[count])

  return(
    <>
    <div>
      Count:{count} <br /><br />
      <button onClick={buttonHandler}>Increment</button> <br /><br />
      
    </div>
    <div>
      <ChildComponent ButtonHandler={buttonHandler} buttonName="Click me"></ChildComponent>
    </div>
    </>
  )
}
export default App 