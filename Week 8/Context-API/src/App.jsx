//to solve the problem of prop drilling we are using context API
import { useState, useContext  } from "react"
import {CountContext} from "./context";
function App() {
  const [count, setCount] = useState(0);
  //we are teleporting {count} to different components without using prop drilling
  return (
    <div>
      <CountContext.Provider value={count}> 
        <Count  setCount={setCount}></Count>
      </CountContext.Provider>
      
    </div>
  )
}

function Count({setCount}) {
  return <div>
    <CountRenderer />
    <Buttons  setCount={setCount} />
  </div>
}

function CountRenderer() {
  const count = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Buttons({ setCount}) {
  const count= useContext(CountContext);
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}

export default App