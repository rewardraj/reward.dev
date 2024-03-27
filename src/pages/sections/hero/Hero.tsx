import { FaChevronDown } from "react-icons/fa";
import Button from "../../../components/Button/Button";
import styles from "./Hero.module.scss";
import Typewriter from "../../../components/Typewriter/Typewriter";

const Hero = () => {
  const phrases = [
    "I'm Reward Joseph.",
    "I'm a Web Developer.",
    "I'm a Programmer.",
    "I'm a System Architect.",
  ];

  const sleepTime = 100;
  return (
    <section id="hero" className={styles.heroWrapper}>
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
            <Button variant="tertiary" className={styles.heroBtn}>
              Hire Me
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.scrollArrow}>
        <a href="#about" className={styles.arrow}>
          <FaChevronDown />{" "}
        </a>
      </div>
    </section>
  );
};

export default Hero;
