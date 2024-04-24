
import navbarcss from "./NavBar.module.css"
import { Link, useLocation } from 'react-router-dom';


function NavBar() {

  const {pathname} = useLocation()

  console.log(pathname);


    return (  
        <>
        
       
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container mt-3 ">
  <a class="navbar-brand" href="#">
      <img src= { require("../../Assets/logo/EDECS 2021_edited 1.png")} alt="Logo" class={ navbarcss.logoimg }/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to={"/home"} class={"nav-link " + navbarcss.navbarlink} aria-current="page"> { pathname == "/home" ? <span className={navbarcss.activenavbarlink}>Home</span> : "Home" } </Link>
        </li>

        <li class="nav-item">
          <Link to={"about-us"} class={"nav-link " + navbarcss.navbarlink} >{ pathname == "/about-us" ? <span className={navbarcss.activenavbarlink}>About Us</span> : "About Us" }</Link>
        </li>

        <li class="nav-item">
          <Link to={"news"} class={"nav-link " + navbarcss.navbarlink} >{ pathname == "/news" ? <span className={navbarcss.activenavbarlink}>News</span> : "News" }</Link>
        </li>

        <li class="nav-item">
          <Link to={"projects"} class={"nav-link " + navbarcss.navbarlink} >{ pathname == "/projects" ? <span className={navbarcss.activenavbarlink}>Projects</span> : "Projects" }</Link>
        </li>


        <li class="nav-item">
          <Link to={"sustainability"} class={"nav-link " + navbarcss.navbarlink} > { pathname == "/sustainability" ? <span className={navbarcss.activenavbarlink}>Sustainability</span> : "Sustainability" }</Link>
        </li>


        <li class="nav-item">
          <Link to={"careers"} class={"nav-link " + navbarcss.navbarlink} >{ pathname == "/careers" ? <span className={navbarcss.activenavbarlink}>Careers</span> : "Careers" }</Link>
        </li>

        
        <li class="nav-item">
          <Link to={"innovation"} class={"nav-link " + navbarcss.navbarlink} >{ pathname == "/innovation" ? <span className={navbarcss.activenavbarlink}>Innovation</span> : "Innovation" }</Link>
        </li>

      </ul>

    </div>
  </div>
</nav>
        
        </>
    )
    ;
}

export default NavBar;
