import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import '../styles/root.css'
import LoadingHome from "../components/LoadingHome";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Root() {
  const [loadingHome , setLoadingHome] = useState(true);

  //when the first render completes make the loadingHome component dissapear
    useEffect(() => {
      if (document.readyState === "complete") {
        setLoadingHome(false)
        
      } else {
        window.addEventListener('load', (event) => { setLoadingHome(false) });
        
      }
    },[])
    
  
  
    return (
      <div> 
        <LoadingHome loadingHome={loadingHome} />
        <div className="main">
          <Header />
          <div className="margin">
            <Outlet />
            <Sidebar />
          </div>
          
        </div>
        <Footer />
      </div>
      
    );
  }