import React from 'react';
import { RecoilRoot, useRecoilState } from 'recoil';
import { todosAtomFamily } from './atoms';
function App(){
  return <RecoilRoot>
    <Todo id={1}></Todo>
    
  </RecoilRoot>
}

function Todo({id}){
  const[todo,setTodo]=useRecoilState(todosAtomFamily(id));
  return(
    <>
      {todo.title}
      {todo.description}
    </>
  )
}
export default App;