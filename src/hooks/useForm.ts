import emailjs from "@emailjs/browser";
import { useState, useRef, FormEvent } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const useForm = (serviceId: string, templateId: string, publicKey: string) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const form = useRef<HTMLFormElement>(null);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const showToastMessage = (message: string, type: "success" | "error") => {
    setToastMessage({ message, type });
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      setToastMessage(null);
    }, 5000);
  };

  const resetForm = () => {
    if (form.current) {
      form.current.reset();
    }
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!executeRecaptcha) {
      showToastMessage("reCAPTCHA not initialized", "error");
      setIsSubmitting(false);
      return;
    }

    if (!form.current) {
      showToastMessage("Form not initialized", "error");
      setIsSubmitting(false);
      return;
    }

    emailjs.init(publicKey);

    executeRecaptcha("submit_form")
      .then((token) => {
        const formData = new FormData(form.current!);

        return emailjs.send(
          serviceId,
          templateId,
          {
            user_name: formData.get("user_name"),
            user_email: formData.get("user_email"),
            subject: formData.get("subject"),
            message: formData.get("message"),
            "g-recaptcha-response": token,
          },
          publicKey
        );
      })
      .then(() => {
        showToastMessage("Message sent successfully!", "success");
        resetForm();
      })
      .catch((error) => {
        const errorMessage =
          error instanceof Error ? error.message : "Failed to send message";
        console.error("Failed to send email:", error);
        showToastMessage(errorMessage, "error");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return {
    isSubmitting,
    showToast,
    toastMessage,
    form,
    sendEmail,
  };
};

export default useForm;
