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
import ReCAPTCHA from "react-google-recaptcha";
import FormProvider, { useForm } from "../../../context/useForm";

const ContactForm = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const { sendEmail, form, refCaptcha, isSubmitting } = useForm();

  const handleToggle = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <div className={styles.formContainer}>
      <form
        className={styles.form}
        ref={form}
        onSubmit={sendEmail}
        method="POST"
        data-sitekey={recaptchaKey}
      >
        <Grid desktopColumns={2}>
          <label htmlFor="user_name" className={styles.inputLabel}>
            <input
              type="text"
              id="user_name"
              placeholder="Name"
              className={`${styles.input} ${styles.inputField}`}
              required
              name="user_name"
            />
          </label>
          <label htmlFor="user_email">
            <input
              type="email"
              id="user_email"
              placeholder="Email"
              className={`${styles.input} ${styles.inputField}`}
              required
              name="user_email"
            />
          </label>
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
            onOptionSelected={setSelectedOption ?? ""}
          />
          <input type="hidden" name="subject" value={selectedOption ?? ""} />
        </Grid>
        <Grid desktopColumns={1}>
          <textarea
            placeholder="Tell me more..."
            rows={5}
            name="message"
            className={`${styles.textarea} ${styles.inputField}`}
          ></textarea>
        </Grid>
        <div className={styles.recaptcha}>
          <ReCAPTCHA
            sitekey={recaptchaKey}
            ref={refCaptcha}
            data-size="normal"
          />
        </div>
        <ButtonDefault
          variant="primary"
          className={styles.button}
          disabled={isSubmitting}
          aria-label="Send message"
        >
          Send
        </ButtonDefault>
      </form>
    </div>
  );
};

const Contact = () => {
  return (
    <section id="Contact" className={styles.contact}>
      <Header title="Contact" />
      <Container>
        <FormProvider
          serviceId={serviceId}
          templateId={contactFormTemplate}
          publicKey={publicKey}
        >
          <ContactForm />
        </FormProvider>
      </Container>
    </section>
  );
};

export default Contact;
