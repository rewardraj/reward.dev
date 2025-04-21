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
} from "../../../components/utils/credentials";
import useForm from "../../../hooks/useForm";

const ContactForm = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const { isSubmitting, showToast, toastMessage, form, sendEmail } = useForm(
    serviceId,
    contactFormTemplate,
    publicKey
  );

  const handleToggle = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <div className={styles.formContainer}>
      {showToast && toastMessage && (
        <div className={`${styles.toast} ${styles[toastMessage.type]}`}>
          <p>{toastMessage.message}</p>
        </div>
      )}
      <form
        className={styles.form}
        ref={form}
        onSubmit={sendEmail}
        method="POST"
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
            onOptionSelected={setSelectedOption}
          />
          <input type="hidden" name="subject" value={selectedOption || ""} />
        </Grid>
        <Grid desktopColumns={1}>
          <textarea
            placeholder="Tell me more..."
            rows={5}
            name="message"
            className={`${styles.textarea} ${styles.inputField}`}
            required
          ></textarea>
        </Grid>
        <ButtonDefault
          variant="primary"
          className={styles.button}
          disabled={isSubmitting}
          aria-label="Send message"
        >
          {isSubmitting ? "Sending..." : "Send"}
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
        <ContactForm />
      </Container>
    </section>
  );
};

export default Contact;
