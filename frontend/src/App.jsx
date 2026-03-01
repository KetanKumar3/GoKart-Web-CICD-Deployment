import { useEffect, useState } from "react";
import Home from "./pages/Home"
import Router from "./router/Router"
import toast, { Toaster } from 'react-hot-toast';
import Splash from "./components/Splash";


function App() {
  
  
  

  return (
    <>
      <div><Toaster /></div>
      {/* {splash ? <Splash /> : <Router />} */}
      <Router />
    </>
  )
}

export default App
