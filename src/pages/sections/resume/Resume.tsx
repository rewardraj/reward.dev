import Header from "../../../components/Header/Header";
import styles from "./Resume.module.scss";
import { Container } from "../../../components/Layout/Container/Container";
import Grid from "../../../components/Layout/Grid/Grid";
import Card from "../../../Education/Card";
import { educations, workExperience } from "../../../Education/ItemList";
import Skills from "../../../components/Skills/Skills";
import { FaDownload } from "react-icons/fa6";
import ButtonDefault from "../../../components/Button/Button";

const Resume = () => {
  return (
    <section id="Resume" className={styles.main}>
      <Container>
        <Header title="Summary" />
        <Grid desktopColumns={2} tabletColumns={2} mobileColumns={1}>
          <div>
            <h2 className={styles.heading}>Education</h2>
            {educations.map((education, index) => (
              <Card key={index} item={education} />
            ))}
          </div>

          <div>
            <h2 className={styles.heading}>Experience</h2>
            {workExperience.map((experience, index) => (
              <Card key={index} item={experience} />
            ))}
          </div>
        </Grid>
        <Grid desktopColumns={1}>
          <Skills />
        </Grid>
        <div className={styles.downloadBtn}>
          <ButtonDefault variant="primary">
            <span>Download Resume</span>
            <FaDownload />
          </ButtonDefault>
        </div>
      </Container>
    </section>
  );
};

export default Resume;
