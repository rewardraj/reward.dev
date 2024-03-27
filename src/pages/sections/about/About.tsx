import ButtonDefault from "../../../components/Button/Button";
import Header from "../../../components/Header/Header";
import {
  Featured,
  ProfileDetail,
} from "../../../components/ProfileDetail/ProfileDetail";
import styles from "./About.module.scss";

const About = () => {
  return (
    <section id="about" className={styles.main}>
      <div className={styles.Container}>
        <Header title="About Me" subtitle="Know Me More" />
        <div className={styles.row}>
          <div className={styles.Column}>
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
          </div>
          <div>
            <div className={styles.detailsList}>
              <div className={styles.list}>
                <div className={styles.ProfileDetail}>
                  <ProfileDetail label="Name" value="Reward Joseph" />
                  <ProfileDetail label="Age" value="28" />
                  <ProfileDetail label="Location" value="Lublin, Poland" />
                  <ProfileDetail
                    label="Email"
                    value={
                      <a
                        href="mailto:rewardraj@gmail.com"
                        className={styles.emailLink}
                      >
                        rewardraj@gmail.com
                      </a>
                    }
                  />
                </div>
              </div>
              <div className={styles.cvBtn}>
                <ButtonDefault variant="primary">Download CV</ButtonDefault>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.gridInfo}>
          <div className={styles.gridInner}>
            <Featured number="10+" description="Years Experience" />
          </div>
          <div className={styles.gridInner}>
            <Featured number="250+" description="Happy Clients" />
          </div>
          <div className={styles.gridInner}>
            <Featured number="650+" description="Projects Done" />
          </div>
          <div className={styles.gridInner}>
            <Featured number="38+" description="Awards Received" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
