import ButtonDefault from "../../../components/Button/Button";
import Header from "../../../components/Header/Header";
import { Featured } from "../../../components/ProfileDetail/ProfileDetail";
import styles from "./About.module.scss";
import { Container } from "../../../components/Layout/Container/Container";
import Grid from "../../../components/Layout/Grid/Grid";
import { FaDownload } from "react-icons/fa6";
import { downloadResume } from "../../../components/utils/Resume/download";

const About = () => {
  return (
    <section id="About" className={styles.main} aria-labelledby="about-heading">
      <Container>
        <Header id="about-heading" title="About Me" />
        <Grid
          desktopColumns={1}
          mobileColumns={1}
          aria-labelledby="about-heading"
        >
          <div>
            <div className={styles.AboutMe}>
              <p>
                My name is <span>Reward Edoyugbo</span> a full stack developer.
                With a passion for crafting elegant and user-centric web
                applications using cutting-edge technologies. Currently Seeking
                dynamic projects to collaborate with talented teams, fostering
                continuous learning and growth.
              </p>
            </div>
            <div className={styles.cvBtn}>
              <ButtonDefault variant="primary" onClick={() => downloadResume()}>
                <span>Download Resume</span>
                <FaDownload aria-hidden="true" />
              </ButtonDefault>
            </div>
          </div>
        </Grid>
        <Grid
          desktopColumns={4}
          tabletColumns={2}
          mobileColumns={2}
          aria-labelledby="featured-heading"
        >
          <Featured number="3+" description="Years Experience" />
          <Featured number="50+" description="Happy Clients" />
          <Featured number="35+" description="Projects Done" />
          <Featured number="2+" description="Awards Received" />
        </Grid>
      </Container>
    </section>
  );
};

export default About;
