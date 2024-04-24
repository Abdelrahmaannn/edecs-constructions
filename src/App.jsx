import { RouterProvider, createHashRouter } from "react-router-dom";
import "./App.css";
import Footer from "./Components/footer/Footer";
import NavBar from "./Components/navBar/Navbar";
import Layout from "./Components/layout/Layout";
import Home from "./Components/home/Home";
import News from "./Components/news/News";
import AboutUs from "./Components/aboutUs/AboutUs";
import Projects from "./Components/projects/Projects";
import SustainabilityForEdecs from "./Components/sustainability/SustainabilityForEdecs";
import Careers from "./Components/careers/Careers";
import Innovation from "./Components/innovation/Innovation";
import ErrorPage from "./Components/errorPage/ErrorPage";
import { Helmet } from "react-helmet";

function App() {
  let browserRouter = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "news", element: <News /> },
        { path: "about-us", element: <AboutUs /> },
        { path: "projects", element: <Projects /> },
        { path: "sustainability", element: <SustainabilityForEdecs /> },
        { path: "careers", element: <Careers /> },
        { path: "innovation", element: <Innovation /> },
        { path: "*", element: <ErrorPage /> },
      ],
    },
  ]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>EDECS: Engineering & Contracting - Construction | Egypt</title>
        <meta
          name="description"
          content="EDECS is a leading construction company in the MENA region specializing in marine, railways, infrastructure, and civil works."
        />
      </Helmet>

      <RouterProvider router={browserRouter} />

      {/* <NavBar/>

    <Footer/> */}
    </>
  );
}

export default App;
