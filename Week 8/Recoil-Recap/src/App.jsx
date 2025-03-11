  // our goal here is to make the LinkedIn header bar whih consist of Home,My net.,jobs,messaging,notification and me using recoil.
  import React from "react";
  import {useMemo} from "react";
  import {useRecoilValue,RecoilRoot,useRecoilState} from "recoil";

  import {networkAtom,jobsAtom,notificationsAtom,messagingAtom,totalNotificationSelector} from "./atoms"
  

  //any component (here MainApp) that is using a recoil hook (like useRecoilvalue etc) must be wrapped inside <RecoilRoot></RecoilRoot>.So we are calling MainApp() from App() wrapped inside <RecoilRoot>.

  function App(){
    return(
      <div>
        <RecoilRoot>
          <MainApp/>
        </RecoilRoot>
      </div>
    )
  }

  function MainApp(){
    const networkNotificationCount=useRecoilValue(networkAtom); //networkAtom->104 from atom.js
    const jobsAtomCount=useRecoilValue(jobsAtom);
    const messagingAtomCount=useRecoilValue(messagingAtom);
    const [notificationAtomcount,setNotificationAtomcount]=useRecoilState(notificationsAtom);
    //const setNotificationAtomCount=useSetRecoilState();

    //without the use of selector we can do like this:
    /*const totalNotificationCount=useMemo(function(){
      return networkNotificationCount+jobsAtomCount+messagingAtomCount;
    },[ networkNotificationCount,jobsAtomCount,messagingAtomCount])*/

    // using selector:
    const totalNotificationCount=useRecoilValue(totalNotificationSelector)
    
    return(
      <>
        <button> Home </button>
        <button>My Network({networkNotificationCount >=100 ? "99+" :networkNotificationCount})</button>
        <button> Jobs({jobsAtomCount}) </button>
        <button> Messaging({messagingAtomCount}) </button> 
        <button onClick={function(){
          setNotificationAtomcount(notificationAtomcount+1);
        }}>Notifications({notificationAtomcount}) </button>
        <button> Me({totalNotificationCount})  </button>
      </>
    )
  }
  export default App;