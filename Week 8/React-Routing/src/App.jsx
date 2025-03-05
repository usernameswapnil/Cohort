import {BrowserRouter,Routes, Route,useNavigate} from 'react-router-dom' //npm install react-router-dom
import {lazy} from "react";
const Dashboarda = lazy(() => import("./Components/Dashboard")) ; //read about React.lazy() from chatgpt
const Landing= lazy(() => import("./Components/Landing")) ;

function App(){
  return(
    <div>
      <BrowserRouter>  
        <Appbar/> 
        <Routes>
          <Route path="/dashboard" element={<Dashboarda></Dashboarda>}> </Route>
          <Route path="/landing"element={<Landing></Landing>}> </Route>
        </Routes>
      </BrowserRouter>
    </div>

  )
}
//navigate logic should always be inside BrowserRouter component
// const navigate=useNavigate() should be inside function containing navigate logic.
function Appbar(){
  const navigate= useNavigate();
  return(
    <div>
        <button onClick={function (){

          //window.location.href = "/landing"; //by using this we are refetching our website and getting all html and css from the backend, once we click on the button. This is not server side routing.Hence dont use this.

          navigate("/landing");
        }}>Landing Page</button> <br /><br />

        <button onClick={function(){
          //window.location.href="/dashboard";
          navigate("/dashboard");
        }}>Dashboard Page</button>
      </div>
  )
}
export default App;