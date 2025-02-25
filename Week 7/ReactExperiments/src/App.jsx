import {useState} from "react"
import React, {Fragment} from "react"
function App(){
  
  return(
    <Fragment>
      <Header title="Swapnil"></Header> <br />
      <Header title="Kumar"></Header> <br />
      <Header title="Singh"></Header> <br/>
      <HeaderWithButton></HeaderWithButton>
    </Fragment>
  )
}
function HeaderWithButton(){
  const[title,setTitle]=useState("My name is: Swapnil");
  function updateTitle(){
    
      setTitle("My name is:" + Math.random())
      // IMP--> Mistake: You're returning JSX inside updateTitle, but "setTitle should be called directly" (not inside a JSX return (i.e inside return(<div></div)))
      //Fix: setTitle should be executed as a function, not inside a JSX return.
      
  }
  return(
    <div>
      <button onClick={updateTitle}>Update the title</button> 
      <Header title={title}></Header>
    </div>
  )
}
/*function Header({title}){
  return(
    <div>
      {title}
    </div>
  )
}*/


const Header= React.memo(function Header({title}){
    return(
      <div>
        {title}
      </div>
    )
  }
)
export default App