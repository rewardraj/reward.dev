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
                I have a passion for creating beautiful and functional websites.
                I am a self-motivated architect with a background in computer
                science. I have experience in building web applications using
                modern technologies like React, Svelte, Node.js, Express, and
                MongoDB.
              </p>
              <p>
                I am always eager to learn new things and improve my skills. I
                am currently looking for new opportunities to work on exciting
                projects and collaborate with other developers.
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
            <Featured number="40+" description="Projects Done" />
          </div>
          <div className={styles.gridInner}>
            <Featured number="4+" description="Awards Received" />
          </div>
        </Grid>
      </Container>
    </section>
  );
};

export default About;
