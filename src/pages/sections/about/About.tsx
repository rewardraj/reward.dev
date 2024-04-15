import ButtonDefault from "../../../components/Button/Button";
import Header from "../../../components/Header/Header";
import { Featured } from "../../../components/ProfileDetail/ProfileDetail";
import styles from "./About.module.scss";
import { Container } from "../../../components/Layout/Container/Container";
import Grid from "../../../components/Layout/Grid/Grid";
import { FaDownload } from "react-icons/fa6";

const About = () => {
  return (
    <section id="About" className={styles.main}>
      <Container>
        <Header title="About Me" />
        <Grid desktopColumns={1} mobileColumns={1}>
          <div>
            <div className={styles.AboutMe}>
              <p>
                My name is <span>Reward Edoyugbo</span> a full stack developer.
              </p>
              <p>
                User I'm an architect with a background in computer science who
                enjoys building aesthetically pleasing and easy to use web
                applications and programs, implementing modern technologies like
                React, Svelte, and Node.js.
              </p>
              <p>
                I'm looking for interesting projects where I can work with other
                developers and build my skills because I'm always willing to
                learn <br /> and progress.
              </p>
            </div>
            <div className={styles.cvBtn}>
              <ButtonDefault variant="disabled" disabled={true}>
                <span>Download Resume</span>
                <FaDownload />
              </ButtonDefault>
            </div>
          </div>
        </Grid>
        <Grid desktopColumns={4} tabletColumns={2} mobileColumns={2}>
          <div className={styles.gridInner}>
            <Featured number="3+" description="Years Experience" />
          </div>
          <div className={styles.gridInner}>
            <Featured number="50+" description="Happy Clients" />
          </div>
          <div className={styles.gridInner}>
            <Featured number="35+" description="Projects Done" />
          </div>
          <div className={styles.gridInner}>
            <Featured number="2+" description="Awards Received" />
          </div>
        </Grid>
      </Container>
    </section>
  );
};

export default About;
