function App(){
  return(
    
    <div>
      <CardWrapper>Hi there</CardWrapper>
      <CardWrapper><TextComponent/></CardWrapper>
    </div>
  )
}
//this children can be another component as well for example TextComponent 
function CardWrapper({children}){
  return(
    <div style={{border:"2px solid black", padding:"20px"}}>
      {children}
    </div>
  )
}
function TextComponent(){
  return(
    <div>
      Hi there from TextComponent
    </div>
  )
}
export default App