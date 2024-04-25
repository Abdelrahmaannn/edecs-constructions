import { Helmet } from "react-helmet";
import AboutUsCss from "./AboutUs.module.css";
import LifeAtEdecsSlider from "../slider/LifeAtEdecsSlider";
import AwardsSlider from "../slider/AwardsSlider";

function AboutUs() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us</title>
      </Helmet>

      <section className="container mt-lg-5  ">
        <div className="row mt-lg-5 d-flex align-items-center ">
          <div className={"col-md-6 pb-5 " + AboutUsCss.logoBackground}>
            <div className="position-relative ">
              <h3 className={AboutUsCss.whoWeAreH3}>WHO WE ARE</h3>

              <p>
                We engage with major clients, professional bodies, and
                international contractors to operate in the region and are fully
                registered and licensed to work on large-scale projects.
              </p>

              <p className={AboutUsCss.smallParagraph}>
                EDECS is registered as a Grade 1 construction company with the
                Egyptian Federation for Construction & Building Contractors and
                as a Grade 2 construction company in Saudi Arabia which puts us
                as one of the very few companies that are licensed to bid and
                construct solely or jointly for large scale projects (unlimited
                size) in our areas of specialization.
              </p>

              <p className={AboutUsCss.smallParagraph}>
                Building on our success in delivering projects to governmental
                and private sector clients with highly appreciated performance
                in terms of quality, time, and cost with respect to safety.
              </p>
              {/* <i
                class={
                  "fa-solid fa-circle-arrow-down " +
                  AboutUsCss.downArrowIndecation
                }
              ></i> */}
            </div>
          </div>

          <div
            className={
              "col-md-5 pb-5 d-flex justify-content-between  " +
              AboutUsCss.whoAreWeImages
            }
          >
            <div className={" ms-5 "}>
              <img
                className="w-100"
                src={require("../../Assets/aboutus/firstSectionImg2.png")}
                alt=""
              />
            </div>
            <div className={AboutUsCss.secondImage}>
              <img
                className="w-100"
                src={require("../../Assets/aboutus/firstSectionImg1.png")}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* /***************************************************************************************** */}
      {/* section 2 */}

      <section className="container mt-lg-5 pb-lg-5 ">
        <div className="row mt-lg-5 d-flex align-items-center">
          <div className="col-md-6">
            <div>
              <img
                className="w-100"
                src={require("../../Assets/aboutus/ataglanceimg.png")}
                alt=""
              />
            </div>
          </div>

          <div className={"col-md-5 offset-lg-1  " + AboutUsCss.logoBackground}>
            <h3 className={AboutUsCss.atGlanceH3}>AT A GLANCE</h3>

            <p className={AboutUsCss.smallParagraph}>
              During the last 28 years, EDECS has become a significant player in
              marine construction, infrastructure, large-scale earthworks, water
              treatment plants, railways, roads, and bridges in Egypt.
            </p>

            <p className={AboutUsCss.smallParagraph}>
              We extended our operations to Saudi Arabia and planned to expand
              further across the Middle East and North Africa.
            </p>

            {/* <i
              class={
                "fa-solid fa-circle-arrow-down " +
                AboutUsCss.downArrowIndecation
              }
            ></i> */}
          </div>
        </div>
      </section>

      {/* /***************************************************************************************** */}
      {/* section 3 */}

      <section className="container mt-lg-5 pb-lg-5 mt-lg-5 pt-lg-2 ">
        <div className="row mt-lg-5 d-flex align-items-center">
          <div className={"col-md-5 " + AboutUsCss.logoBackground}>
            <h3 className={AboutUsCss.ourHistoryH3}>OUR HISTORY</h3>

            <p className={AboutUsCss.smallParagraph}>
              EDECS for Engineering and Contracting was established in 1995 as a
              general civil engineering construction company focusing on Large
              Scale Civil Engineering Projects. Under an ambitious vision for
              expansion and specialization in the field of marine works, ports,
              and infrastructure works. Since establishing the company, EDECS
              has continued in this field with expansion in dredging, marine
              works, roads, bridges, and Irrigation stations. All this was done
              while regularly investing in possessing the latest and most
              advanced equipment for excellence in these areas.
            </p>

            <p className={AboutUsCss.smallParagraph}>
              We currently excel in a plethora of classifications such as
              bridges and roadworks, railway, earthworks, dredging, and various
              more. Our goal is to provide high-quality services at extremely
              competitive prices to deliver meaningful projects that directly
              impact our lives.
            </p>
            {/* 
            <i
              class={
                "fa-solid fa-circle-arrow-down " +
                AboutUsCss.downArrowIndecation
              }
            ></i> */}
          </div>

          <div className="col-md-6 offset-lg-1 ">
            <div>
              <img
                className="w-100"
                src={require("../../Assets/aboutus/ourHistoryImg.png")}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* ***************************************************************************************** */}

      {/* section 4 */}

      <section className="container mt-lg-5 pb-lg-5 mt-lg-5 pt-lg-2 ">
        <h3 className={AboutUsCss.lifeAtEdecsH3}>LIFE AT EDECS</h3>

        <LifeAtEdecsSlider />

        <p className={AboutUsCss.smallParagraph2 + " mt-md-4 "}>
          It's essential that our people are always in a position to focus on
          their life goals and the meaningful work they're doing with us. That's
          why we've invested in our state-of-the-art headquarters at Cairo
          Business Park to ensure that our team is in a professional yet
          comforting setting that they can prosper in.We're also very
          competitive with our perks and benefits, such as our healthcare plan,
          to further help alleviate external stresses and help build this
          nurturing environment.
        </p>

        <p className={AboutUsCss.smallParagraph2}>
          To fit right in, we ask you to be helpful and empathetic to everyone
          around you because we're always working in teams with varying
          experience levels in multiple dimensions. We're all looking to learn
          from each other.
        </p>
      </section>

      {/* ***************************************************************************************** */}

      {/* section 4 */}

      <section className="container mt-lg-5 pb-lg-5 mt-lg-5 pt-lg-2 ">
        <div className={"row d-flex justify-content-center " + AboutUsCss.greenSectionbox}>
          <div className={"col-md-5 " + AboutUsCss.greenBox}>
            <div>
              <h5>Vision</h5>

              <p>
                To be the region's leading construction company in marine,
                railways, bridges & roads, infrastructure, and civil works,
                delivering value to our clients.
              </p>
            </div>
          </div>

          <div className={"col-md-5 offset-md-1 " + AboutUsCss.greenBox}>
            <div className={AboutUsCss.greenBoxSmallScreen}>
              <h5>Mission</h5>

              <p>
                Working closely with our clients to develop creative solutions
                to meet their challenges is our daily job. We are committed to
                providing the highest levels of quality & safety in all aspects
                of our work while taking care of our employees, communities, and
                environment.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-5 ">
          <div className="col-md-5 d-flex justify-content-center mt-5  ">
            <div>
              <h2 className={AboutUsCss.ourValues}>
                Our values at <br /> <span>EDECS</span>
              </h2>
              <i class={"fa-solid fa-arrow-right " + AboutUsCss.rightArrow}></i>
            </div>
          </div>

          <div className="col-md-5 offset-md-1 mt-5  ">
            <div className="row">
              <div className={"col-md-5 " + AboutUsCss.valueCard}>
                <h4>People</h4>
                <p>
                  Our people are the true assets; we are committed to investing
                  in their capabilities and well-being.
                </p>
              </div>

              <div className={"col-md-5 offset-md-1 " + AboutUsCss.valueCard}>
                <h4>Quality</h4>
                <p>
                  Our passion is excellence and ensuring a safe & healthy
                  environment for our employees, clients & community.
                </p>
              </div>

              <div className={"col-md-5 mt-3 " + AboutUsCss.valueCard}>
                <h4>Agility</h4>
                <p>
                  We focus on adopting innovative, and flexible solutions to
                  proactively overcome challenges.
                </p>
              </div>

              <div
                className={"col-md-5 offset-md-1 mt-3 " + AboutUsCss.valueCard}
              >
                <h4>Ownership</h4>
                <p>
                  We honor our promises and strive to build and maintain strong
                  long-term partnerships with our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ***************************************************************************************** */}

      {/* section 5 */}

      <section className="container mt-lg-5 pb-lg-5 mt-lg-5 pt-lg-2">
        <h3 className={AboutUsCss.AwardsH3}>CERTIFICATES & AWARDS</h3>

        <div className="row pb-5 mb-5 d-flex justify-content-center ">
          <div className="col-md-4 mt-2">
            <div>
              <img
                className="w-75"
                src={require("../../Assets/aboutus/award1.png")}
                alt=""
              />
            </div>
          </div>

          <div className="col-md-4 mt-2 ">
            <div>
              <img
                className="w-75"
                src={require("../../Assets/aboutus/award2.png")}
                alt=""
              />
            </div>
          </div>

          <div className="col-md-4 mt-2">
            <div>
              <img
                className="w-75"
                src={require("../../Assets/aboutus/award3.png")}
                alt=""
              />
            </div>
          </div>
        </div>

        {/* ************ */}

        <AwardsSlider />

        {/* ************ */}
      </section>

      <section  className="container mt-lg-5 pb-lg-5 mt-lg-5 pt-lg-2">

      <h3 className={AboutUsCss.BoardMembersH3}>OUR BOARD MEMBERS</h3>

      <div className="row pb-5 d-flex justify-content-center ">
        
        <div className="col-md-4">
            <img className="w-75" src={require("../../Assets/aboutus/hussien.png")} alt="" />
            <h5 className={AboutUsCss.memberName}>Hussein El-Dessouky</h5>
            <h6 className={AboutUsCss.memberRole}>Chairman & Managing Director </h6>
        </div>

        <div className="col-md-4">
            <img className="w-75" src={require("../../Assets/aboutus/mahmoud.png")} alt="" />
            <h5 className={AboutUsCss.memberName}>Mahmoud Hassanen</h5>
            <h6 className={AboutUsCss.memberRole}>Vice Chairman of the Board </h6>

        </div>

        <div className="col-md-4">
            <img className="w-75" src={require("../../Assets/aboutus/mohamed.png")} alt="" />
            <h5 className={AboutUsCss.memberName}>Mohamed Abo Heiba</h5>
            <h6 className={AboutUsCss.memberRole}>Admin & Government affairs Director </h6>
        </div>


      </div>

      </section>
    </>
  );
}

export default AboutUs;
