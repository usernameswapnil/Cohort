//In this assignment, your task is to create a component that performs an expensive calculation{finding the factorial} based on a user input.
//Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.
import {useState,useMemo} from "react"

export function Assignment1(){
  const[input,setInput]=useState(0);

  const  expensiveValue=useMemo(function(){
    let Value=1;
    for(let i=1;i<=input;i++){
      Value=Value*i;
    }
    return Value;
  },[input])
  

  return(
    <div>
      <input type="number" value={input} onChange={function(e){
        setInput(Number(e.target.value));
      }}  />
      <p>Calculated Value:{expensiveValue}</p>
    </div>
  )
}
