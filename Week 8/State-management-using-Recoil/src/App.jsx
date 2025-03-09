//Problem with Context-API -> Does not fix re-rendering, only fixes prop drilling.
//State Management -> Helps u to get rid of problems that context API has(unnecessary re-renders).
// npm install recoil

import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";
//RecoilRoot is similar to "<CountContext.Provider value={count}></CountContext.Provider>" that we have studied before (it is used for teleporting a variable).
//The Count component is inside <RecoilRoot>, meaning Count and its children can use Recoil atoms and selectors.
function App() {
  return (
    <div>
      <RecoilRoot> 
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  console.log("re-render");
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  //Returns the value of the given Recoil state but does not allow modifying it (think  it as of useState[count,setCount],this UseRecoilValue is similar to count variable).This hook will subscribe the component to re-render if there are changing in the Recoil state.
  const count = useRecoilValue(countAtom);
  
  return <div>
    <b>
      {count}
    </b>
    <EvenCountRenderer />
  </div>
}

function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector);

  return <div>
    {isEven ? "It is even" : null}
  </div>
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  console.log("buttons re-rendererd");

  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

export default App