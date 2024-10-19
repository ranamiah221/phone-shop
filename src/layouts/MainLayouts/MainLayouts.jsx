import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";


const MainLayouts = () => {
    const location=useLocation();
    console.log(location, location.pathname);
    if(location.pathname =='/'){
        document.title="Phone - Home"
    }
    else{
       document.title=`Phone ${location.pathname.replace('/','- ')}`
    }
    if(location.state){
      document.title= ` ${location.state}`
    }

    
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;