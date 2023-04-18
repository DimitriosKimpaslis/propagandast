import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import '../styles/root.css'
import LoadingHome from "../components/LoadingHome";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { getCurrentUrl } from "swup";

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

    const [url , setUrl] = useState('');

    useEffect(() =>{
      setUrl(getCurrentUrl());
      const frontPage = document.getElementById('FrontPage');
      if (url === '/'){
        frontPage.style.display = 'block'
      }else{
        frontPage.style.display = 'none'
      }
    },[url])
  
  
    return (
      <div> 
        <LoadingHome loadingHome={loadingHome} />
        <div className="main">
          <Header />
          <div id="FrontPage">
            <div className="frontPageImage">
              <div className="frontPageContainer">
                <h6>Propagandast: Your Local Overinflated Reviews</h6>
                <h1>{`Join our subscriber list today \n and miss no new movies!`}</h1>
                <form>
                  <input placeholder="Email"></input>
                  <button className="btn">Subscribe</button>
                </form>
               </div>
            </div>
          </div>
          <div className="margin">
            <Outlet context={setUrl} />
            <Sidebar />
          </div>
          
        </div>
        <Footer />
      </div>
      
    );
  }