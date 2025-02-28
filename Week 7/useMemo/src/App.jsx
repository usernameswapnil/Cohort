import { useState,useMemo } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

// when setCounter(counter+1) [line 26] is run it increases the value of counter and re-renders happens. Due to this re render this loop (of finalcount) runs but do we need to run this "expensive opeartion" again? Can we not remember the value from the last render instead of iterating this loop again. That's why -----> useMemo() is used.

  let count= useMemo( function(){
    console.log("useMemo got called") //for checking -> only when we give some input value we get to see "useMemo got called" in the console. We don't see this when will increase the counter.
    let finalcount = 0;
    for (let i = 1; i <= inputValue; i++) {
      finalcount = finalcount + i;
    }
    return finalcount;
  },[inputValue ]) //runs only when the input value is changed.
  

  return <div>
    <input onChange={function(e) {
      setInputValue(e.target.value);
    }} placeholder={"Find sum from 1 to n"}></input>
    <br />
    Sum from 1 to {inputValue} is {count}
    <br />
    <button onClick={() => {
      setCounter(counter + 1);
    }}>Counter ({counter})</button>
  </div>
}

export default App;

