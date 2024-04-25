import { FaChevronDown } from "react-icons/fa";
import Button from "../../../components/Button/Button";
import styles from "./Hero.module.scss";
import Typewriter from "../../../components/Typewriter/Typewriter";
import { Link } from "react-scroll";
import { Section } from "../../../components/utils/sections";

const Hero = () => {
  const phrases = [
    "I'm Reward Edoyugbo.",
    "I'm a Web Developer.",
    "I'm a Programmer.",
  ];

  const sleepTime = 100;
  return (
    <section id="Hero" className={styles.heroWrapper}>
      <div className={styles.heroMask}></div>
      <div className={styles.heroParallax}></div>
      <div className={styles.heroContent}>
        <div className={styles.contentContainer}>
          <div className={styles.contentTextRow}>
            <p className={styles.introText}>Hi There! 👋</p>
            <h2>
              <div className="typewriterStuff">
                <Typewriter phrases={phrases} sleepTime={sleepTime} />
              </div>
            </h2>
            <p> based in Lublin, Poland 🇵🇱</p>
            <Link to={Section.Contact} smooth={true} duration={1}>
              <Button variant="tertiary" className={styles.heroBtn}>
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.scrollArrow}>
        <Link
          to={Section.About}
          smooth={true}
          duration={1}
          className={styles.arrow}
        >
          <FaChevronDown aria-hidden="true" aria-label="Scroll down" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
