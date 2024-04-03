import styles from "./Services.module.scss";
import { services } from "../../../components/Service/serviceList";
import Header from "../../../components/Header/Header";
import { Service } from "../../../components/Service/Service";
import { Container } from "../../../components/Layout/Container/Container";
import Grid from "../../../components/Layout/Grid/Grid";

const Services = () => {
  return (
    <section id="Services" className={styles.main}>
      <Container>
        <Header title="Services" />
        <Grid desktopColumns={2} tabletColumns={2}>
          {services.map((service, index) => (
            <Service
              key={index}
              IconComponent={service.IconComponent}
              title={service.title}
              description={service.description}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Services;
