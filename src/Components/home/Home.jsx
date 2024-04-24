import { Helmet } from "react-helmet";
import homecss from "./Home.module.css";
import SimpleSlider from "../slider/HeroSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AutoPlay from "../slider/HeroSlider";

function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>

      {/* ********************************************************************** */}
      <header className={homecss.backGroung2Image}>
        <div className={homecss.websiteIntro}>
          <h2>
            A LEADING CONSTRUCTION COMPANY <br /> IN THE MENA REGION
          </h2>
          <h3>
            WE SPECIALIZE IN MARINE, RAILWAYS, INFRASTRUCTURE, <br /> AND CIVIL
            WORKS.
          </h3>
        </div>

        <div className={homecss.animatedLine}></div>
      </header>
      {/* ********************************************************************** */}

      {/* ********************************************************************** */}

      <section className="container mt-5 pb-3 ">
        <h2 className={homecss.overviewH2}>OVERVIEW</h2>

        <div className="row d-flex justify-content-center ">
          <div className="col-md-5 pt-5 ">
            <img
              className="w-100"
              src={require("../../Assets/home photos/employees.png")}
              alt="employees picture"
            />
          </div>

          <div className="col-md-6 pt-5 ">
            <img
              className="w-100"
              src={require("../../Assets/home photos/cairo festival city.png")}
              alt="cairo festival city"
            />

            <ul className={"list-unstyled mt-lg-5 mt-md-4 ms-3 " + homecss.ulInSmallScreen}>
              <li className={homecss.mainListedItems}>
                <i
                  class={
                    "fa-solid fa-circle fa-2xs pe-2  " +
                    homecss.bulletPointColor
                  }
                ></i>{" "}
                We are a registered Grade 1 Construction Company by the Egyptian
                Federation for{" "}
                <span className="ms-lg-4 ">
                  {" "}
                  Construction & Building Contractors.{" "}
                </span>
              </li>

              <li className={homecss.mainListedItems}>
                <i
                  class={
                    "fa-solid fa-circle fa-2xs pe-2  " +
                    homecss.bulletPointColor
                  }
                ></i>{" "}
                This sets us as one of the very few companies licensed to
                deliver solely or jointly{" "}
                <span className="ms-lg-4 ">
                  {" "}
                  for large-scale projects in our areas of specialization.
                </span>
              </li>
            </ul>

            <div className="d-flex justify-content-between ">
              <ul className="list-unstyled w-md-50 ms-3">
                <li className={homecss.mainListedItems}>
                  {" "}
                  <i
                    class={
                      "fa-solid fa-caret-right fa-sm pe-lg-2 " +
                      homecss.bulletPointColor
                    }
                  ></i>{" "}
                  Over 250 Projects Completed
                </li>
                <li className={homecss.mainListedItems}>
                  {" "}
                  <i
                    class={
                      "fa-solid fa-caret-right fa-sm pe-lg-2 " +
                      homecss.bulletPointColor
                    }
                  ></i>{" "}
                  Over 15,000 Employees
                </li>
              </ul>

              <ul className="list-unstyled w-md-50 ">
                <li className={homecss.mainListedItems}>
                  {" "}
                  <i
                    class={
                      "fa-solid fa-caret-right fa-sm pe-lg-2 " +
                      homecss.bulletPointColor
                    }
                  ></i>{" "}
                  Over 250 Projects Completed
                </li>
                <li className={homecss.mainListedItems}>
                  {" "}
                  <i
                    class={
                      "fa-solid fa-caret-right fa-sm pe-lg-2 " +
                      homecss.bulletPointColor
                    }
                  ></i>{" "}
                  Over 15,000 Employees
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* ********************************************************************** */}

      {/* ********************************************************************** */}
      <section className="container mt-3 pb-5 ">
        <h2 className={homecss.latestUpdatesH2}>LATEST UPDATES</h2>

        <div className="row mt-4 ">
          <div className={"col-md-4 mt-4 "}>
            <div className={homecss.inner + " pb-4"}>
              <img
                className="w-100"
                src={require("../../Assets/home photos/news1.png")}
                alt=""
              />
              <h5 className={homecss.newsDescription}>
                Quay Walls Installation at the multi-purpose terminal project at
                Safaga seaport
              </h5>
            </div>
          </div>

          <div className="col-md-4 mt-4">
            <div className={homecss.inner + " pb-4"}>
              <img
                className="w-100"
                src={require("../../Assets/home photos/news2.png")}
                alt=""
              />
              <h5 className={homecss.newsDescription}>
                MEED Projects Awards 2023 National Winner Transport Project of
                the Year 2023
              </h5>
            </div>
          </div>

          <div className="col-md-4 mt-4">
            <div className={homecss.inner + " pb-4"}>
              <img
                className="w-100"
                src={require("../../Assets/home photos/news3.png")}
                alt=""
              />
              <h5 className={homecss.newsDescription}>
                EDECS team joined hands with the Share a Smile Foundation
              </h5>
            </div>
          </div>
        </div>

        <div className="position-relative d-flex  justify-content-center  mt-4 ">
          <a class={homecss.fancy + ""} href="#">
            <span class={homecss.topkey}></span>
            <span class={homecss.text}>All News</span>
            <span class={homecss.bottomkey1}></span>
            <span class={homecss.bottomkey2}></span>
          </a>
        </div>
      </section>
      {/* ********************************************************************** */}

      {/* ********************************************************************** */}
      <section className="container mt-1 pb-5 ">
        <h2 className={homecss.featuredProjectsH2}>FEATURED PROJECTS</h2>

        <div className="row mt-4 ">
          <div className="col-md-4 mt-4">
            <div className={homecss.inner + " pb-4"}>
              <img
                className="w-100"
                src={require("../../Assets/home photos/featureProject1.png")}
                alt=""
              />
              <h5 className={homecss.newsDescription}>
                Tahya Masr Multi-purpose Terminal Alexandria Seaport
              </h5>
            </div>
          </div>

          <div className="col-md-4 mt-4">
            <div className={homecss.inner + " pb-4"}>
              <img
                className="w-100"
                src={require("../../Assets/home photos/featureProject2.png")}
                alt=""
              />
              <h5 className={homecss.newsDescription}>High-Speed Rail (HSR)</h5>
            </div>
          </div>

          <div className="col-md-4 mt-4">
            <div className={homecss.inner + " pb-4"}>
              <img
                className="w-100"
                src={require("../../Assets/home photos/featureProject3.png")}
                alt=""
              />
              <h5 className={homecss.newsDescription}>
                Construction of Eastern Quay Wall In East Port Said, Egypt
              </h5>
            </div>
          </div>
        </div>

        <div className="position-relative d-flex  justify-content-center  mt-2">
          <a class={homecss.fancy} href="#">
            <span class={homecss.topkey}></span>
            <span class={homecss.text}>All News</span>
            <span class={homecss.bottomkey1}></span>
            <span class={homecss.bottomkey2}></span>
          </a>
        </div>
      </section>
      {/* ********************************************************************** */}



      {/* ********************************************************************** */}

      <section className="container mt-1 pb-5 ">
        <h2 className={homecss.partnersH2}>OUR PARTNERS & CLIENTS</h2>


        <div className={homecss.partnersBackground} >

          <AutoPlay/>

        </div>


      </section>

      {/* ********************************************************************** */}
    </>
  );
}

export default Home;
