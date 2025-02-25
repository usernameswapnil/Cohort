import {useState} from "react"
let counter=4;

function App(){
  const[todos,setTodos]=useState([{
    id:1,
    title:"padhai kar bhai",
    description:"aaj padhai kar"
  },{
    id:2,
    title:"start kar bhai",
    description:"aaj start kar"
  },{
    id:3,
    title:"khana kha bhai",
    description:"aaj kha"
  }]);
  
  function addTodo(){
    setTodos([...todos,{    // Spreads the existing todos array (keeps old todos)
      id:counter++,
      title: Math.random(),
      description: Math.random()
    }])
  }

  return(
    <div>
      <button onClick={addTodo}>Add a todo</button>
      {todos.map(function(todo){
        return <Todo key={todo.id} title={todo.title} description={todo.description}></Todo> 
      })}
    </div>
  )
}

function Todo({title,description}){
  return(
    <div>
      <h1>
        {title}
      </h1>
      <h2>
        {description}
      </h2>
    </div>
  )
}
export default App