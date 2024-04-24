import footercss from "./Footer.module.css";

function Footer() {
  return (
    <>
      <footer className={footercss.mainFooter}>
        <div className="container pb-5 ">
          <div className="row">
            <div className="col-md-8 pt-5 ">
              <div className="row">
                {/* ***************************************************** */}
                <div className="col-md-5 pt-5 ">
                  <div>
                    <h4 className={footercss.myh4}>EDECS HQs (Egypt)</h4>
                    <ul className=" list-unstyled mt-4  ">
                      <li className={"py-1 " + footercss.myli}>
                        {" "}
                        <i class="fa-solid fa-location-dot pe-1 "></i> B1/22
                        Cairo Business Park, New Cairo
                      </li>
                      <li className={"py-1 " + footercss.myli}>
                        {" "}
                        <i class="fa-solid fa-phone pe-1"></i> +20 2 25412 100 |
                        +20 2 25412 700 | +20 1000 099482
                      </li>
                      <li className={"py-1 " + footercss.myli}>
                        {" "}
                        <i class="fa-solid fa-fax pe-1 "></i>+20 2 25412 300
                      </li>
                    </ul>
                  </div>
                </div>

                {/* ***************************************************** */}

                {/* ***************************************************** */}
                <div className="col-md-5 offset-md-2  pt-5 ">
                  <div>
                    <h4 className={footercss.myh4}>EDECS (Saudi Arabia)</h4>
                    <ul className=" list-unstyled mt-4  ">
                      <li className={"py-1 " + footercss.myli}>
                        {" "}
                        <i class="fa-solid fa-location-dot pe-1 "></i> Al-Mas
                        Commercial Tower, Office No. 301, King Fahad Street -
                        Olaya District
                      </li>
                      <li className={"py-1 " + footercss.myli}>
                        {" "}
                        <i class="fa-solid fa-phone pe-1"></i> +966115122569
                      </li>
                    </ul>
                  </div>
                </div>

                {/* ***************************************************** */}

                {/* ***************************************************** */}
                <div className="col-md-5 pt-5 ">
                  <div>
                    <h4 className={footercss.myh4}>Port Said Office (Egypt)</h4>
                    <ul className=" list-unstyled mt-4  ">
                      <li className={"py-1 " + footercss.myli}>
                        {" "}
                        <i class="fa-solid fa-location-dot pe-1 "></i> 23rd of
                        July St., Marwa Tower
                      </li>
                      <li className={"py-1 " + footercss.myli}>
                        {" "}
                        <i class="fa-solid fa-phone pe-1"></i> +20 66 3200 200 |
                        +20 66 3200 300
                      </li>
                      <li className={"py-1 " + footercss.myli}>
                        {" "}
                        <i class="fa-solid fa-fax pe-1 "></i>+20 66 3200 001
                      </li>
                    </ul>
                  </div>
                </div>

                {/* ***************************************************** */}

                {/* ***************************************************** */}
                <div className="col-md-5 offset-md-2  pt-5 ">
                  <div>
                    <h4 className={footercss.myh4}>EDECS (Saudi Arabia)</h4>
                    <ul className=" list-unstyled mt-4  ">
                      <li className={"py-1 " + footercss.myli}>
                        {" "}
                        <i class="fa-solid fa-location-dot pe-1 "></i>  8442
                        Othman Ibn Affan - El-Nozha District 
                      </li>
                      <li className={"py-1 " + footercss.myli}>
                        {" "}
                        <i class="fa-solid fa-phone pe-1"></i> +966014535135
                      </li>
                    </ul>
                  </div>
                </div>

                {/* ***************************************************** */}
              </div>
            </div>

            {/* the second part of the footer on the left side */}
            <div className="col-md-4  pt-md-5 ">
              <div className="pt-5 d-flex flex-column justify-content-center align-items-center    ">
                <img
                  src={require("../../Assets/logo/footer-logo.png")}
                  className={footercss.footerImagelogo}
                  alt="company logo"
                />

                <a class={footercss.fancy + " mt-5 "} href="#">
                  <span class={footercss.topkey}></span>
                  <span class={footercss.text}>Company Profile</span>
                  <span class={footercss.bottomkey1}></span>
                  <span class={footercss.bottomkey2}></span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={footercss.footerline}></div>

        <div className="container pt-4">
          <div className="row d-flex justify-content-between align-items-center  ">
            {/* ****************************** */}

            <div className="col-md-4">
              <div>
                <h5 className={footercss.myh5}>
                  ©2024 EDECS All Rights Reserved.
                </h5>
              </div>
            </div>

            {/* ****************************** */}

            {/* ****************************** */}

            <div className="col-md-4">
              <div className="text-center">
                <img src={require("../../Assets/logo/footer-logo.png")} className={footercss.footerimg2} />
              </div>
            </div>

            {/* ****************************** */}

            {/* ****************************** */}

             <div className="col-md-4">
              <div className={footercss.footerUl} >
                <ul className={"list-unstyled d-flex justify-content-end " + footercss.footerUl}>
                    <li className="pe-3"> <a href="https://www.facebook.com/EDECS.EGYPT?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer" className={footercss.socialLinks}> <i class="fa-brands fa-facebook"></i> </a></li>
                    <li className="pe-3"> <a href="https://www.instagram.com/edecs_egypt/" target="_blank" rel="noopener noreferrer" className={footercss.socialLinks}> <i class="fa-brands fa-instagram"></i> </a></li>
                    <li className="pe-3"> <a href="https://www.youtube.com/channel/UCYTES2XUWAed4J8aJb4tm8w" target="_blank" rel="noopener noreferrer" className={footercss.socialLinks}> <i class="fa-brands fa-youtube"></i></a></li>
                    <li className="pe-3"> <a href="https://www.linkedin.com/company/edecs/" target="_blank" rel="noopener noreferrer" className={footercss.socialLinks}> <i class="fa-brands fa-linkedin"></i> </a></li>
                </ul>
              </div>
            </div>

            {/* ****************************** */}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
