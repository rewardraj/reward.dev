import Header from "../../../components/Header/Header";
import { Container } from "../../../components/Layout/Container/Container";
import Grid from "../../../components/Layout/Grid/Grid";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <Header title="Contact" subtitle="Get in touch" />
      <Container>
        <div className={styles.formContainer}>
          <form action="" className={styles.form}>
            <Grid desktopColumns={2}>
              <input type="text" placeholder="Name" className={styles.input} />
              <input
                type="email"
                placeholder="Email"
                className={styles.input}
              />
            </Grid>
            <Grid desktopColumns={2} gridGap="20px">
              <select name="item1" title="item1" className={styles.select}>
                <option value="">What are you interested in?</option>
                <option value="web-design">Web Design</option>
                <option value="react">React</option>
                <option value="typescript">TypeScript</option>
                <option value="javascript">JavaScript</option>
              </select>
              <select name="item2" title="item2" className={styles.select}>
                <option value="">What is your budget?</option>
                <option value="500">$500</option>
                <option value="1000">$1000</option>
                <option value="2000">$2000</option>
                <option value="5000">$5000+</option>
              </select>
            </Grid>
            <Grid desktopColumns={1}>
              <textarea
                placeholder="Tell me about your project..."
                rows={5}
                className={styles.textarea}
              ></textarea>
            </Grid>
            <Grid desktopColumns={1}>
              <button className={styles.button}>Send</button>
            </Grid>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
