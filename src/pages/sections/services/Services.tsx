import styles from "./Services.module.scss";
import { services } from "../../../components/Service/serviceList";
import Header from "../../../components/Header/Header";
import { Service } from "../../../components/Service/Service";

const Services = () => {
  return (
    <section id="services" className={styles.main}>
      <div className={styles.Container}>
        <Header title="Services" subtitle="What I can do for you" />
        <div className={styles.row}>
          <div className={styles.grid}>
            {services.map((service, index) => (
              <Service
                key={index}
                IconComponent={service.IconComponent}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
