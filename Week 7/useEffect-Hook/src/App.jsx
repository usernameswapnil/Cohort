import {useEffect, useState} from "react"
function App(){
  const[count,setCount]=useState(0);
  const[total,setTotal]=useState(0);
  //first -> side effect function
  //second -> clean up function
  //third -> comma seperated by list

  //Variation-1: Runs on every render
  /*useEffect(function(){
    alert("I will run in each render")
  })*/

  //Variation-2: Runs on only first render
  /*useEffect(function(){
    alert("I will only run on first render");
  }, []) */                                   //dependency list -> empty

  //Variation-3: Runs only when the count is updated
  /*useEffect(function(){
    alert("I will run only when the count is updated");
  },[count])*/

  //Variation-4: Multiple dependencies
  /*useEffect(function(){
    alert("I will run when either of count or total is updated")
  },[count,total]) */

  // Variation-5: Adding a cleanup function
  useEffect(function(){
    alert("count is updated");
    return(function(){
      alert("count is unmounted from UI")
    })
  },[count])
  function handleCountButton(){
    setCount(count+1);
  }
  function handleTotalButton(){
    setTotal(total+1);
  }
  return(
    <div>
      <button onClick={handleCountButton}>UPDATE COUNT</button> <br />
      Count is: {count} <br />
      <button onClick={handleTotalButton}>UPDATE TOTAL</button> <br />
      Total is: {total}
    </div>
  )
  
}
export default App;

