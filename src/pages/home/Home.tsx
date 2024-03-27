import Navbar from "../../components/navbar/Navbar";
import About from "../sections/about/About";
import Hero from "../sections/hero/Hero";
import Portfolio from "../sections/portfolio/Portfolio";
import Services from "../sections/services/Services";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div id="content" role="main" className={styles.contentWrapper}>
        <Hero />
        <About />
        <Services />
        <Portfolio />
      </div>
    </div>
  );
};

export default Home;
