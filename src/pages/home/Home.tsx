import Navbar from "../../components/navbar/Navbar";
import About from "../sections/about/About";
import Contact from "../sections/contact/Contact";
import Hero from "../sections/hero/Hero";
import Portfolio from "../sections/portfolio/Portfolio";
import Resume from "../sections/resume/Resume";
import Services from "../sections/services/Services";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div id="Content" role="main" className={styles.contentWrapper}>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Resume />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
