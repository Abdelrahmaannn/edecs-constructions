import { Outlet } from "react-router-dom";
import NavBar from "../navBar/Navbar";
import Footer from "../footer/Footer";

function Layout() {
    return ( 

        <>

        <NavBar/>
        <Outlet/>
        <Footer/>
        
        
        
        
        </>



     );
}

export default Layout;