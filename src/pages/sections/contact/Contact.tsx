import { useState } from "react";
import Header from "../../../components/Header/Header";
import { Container } from "../../../components/Layout/Container/Container";
import Grid from "../../../components/Layout/Grid/Grid";
import styles from "./Contact.module.scss";
import Dropdown from "../../../components/Dropdown/Dropdown";
import ButtonDefault from "../../../components/Button/Button";
import {
  serviceId,
  contactFormTemplate,
  publicKey,
  recaptchaKey,
} from "../../../components/utils/credentials";
import Form from "../../../components/utils/form";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const { isSubmitting, showToast, form, sendEmail, refCaptcha } = Form(
    serviceId,
    contactFormTemplate,
    publicKey
  );

  const handleToggle = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <section id="Contact" className={styles.contact}>
      <Header title="Contact" />
      <Container>
        <div className={styles.formContainer}>
          <form className={styles.form} ref={form} onSubmit={sendEmail}>
            <Grid desktopColumns={2}>
              <input
                type="text"
                placeholder="Name"
                className={`${styles.input} ${styles.inputField}`}
                required
                name="user_name"
              />
              <input
                type="email"
                placeholder="Email"
                className={`${styles.input} ${styles.inputField}`}
                required
                name="user_email"
              />
            </Grid>
            <Grid desktopColumns={1} gridGap="20px">
              <Dropdown
                title="Subject"
                options={[
                  "General Inquiry",
                  "Project Collaboration",
                  "Job Opportunity",
                  "Feedback",
                  "Other",
                ]}
                isOpen={openDropdown === "dropdown1"}
                onToggle={() => handleToggle("dropdown1")}
                onOptionSelected={setSelectedOption}
              />
              <input
                type="hidden"
                name="subject"
                value={selectedOption || ""}
              />
            </Grid>
            <Grid desktopColumns={1}>
              <textarea
                placeholder="Tell me more..."
                rows={5}
                name="message"
                className={`${styles.textarea} ${styles.inputField}`}
              ></textarea>
            </Grid>
            <ReCAPTCHA sitekey={recaptchaKey} ref={refCaptcha} />
            <ButtonDefault
              variant="primary"
              className={styles.button}
              disabled={isSubmitting}
            >
              Send
            </ButtonDefault>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
