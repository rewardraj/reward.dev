import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Form = (serviceId: string, templateId: string, publicKey: string) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [name, setName] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();
  const [option, setSelectOption] = useState<string | undefined>();
  const captchaKey = useRef<number>(new Date().getTime());
  const refCaptcha = useRef<ReCAPTCHA>(null);

  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (refCaptcha.current) {
      const token = refCaptcha.current.getValue();
      if (!token) {
        alert("Do the captcha challenge");
        return;
      }

      setIsSubmitting(true);
      if (form.current) {
        const opts = {
          publicKey,
          "g-recaptcha-response": token,
        };
        emailjs
          .sendForm(serviceId, templateId, form.current, opts as any)
          .then(() => {
            setShowToast(true);
            setTimeout(() => setShowToast(false), 5000);
            if (form.current) {
              form.current.reset();
            }
            setIsSubmitting(false);
          })
          .catch((error) => {
            console.error("FAILED...", error);
            setShowToast(true);
            setTimeout(() => setShowToast(false), 5000);
            setIsSubmitting(false);
          })

          //this fixes captcha reset issue
          .finally(() => {
            if (refCaptcha.current) {
              refCaptcha.current.reset();
              captchaKey.current = new Date().getTime();
            }
          });
      }
    } else {
      console.error("reCAPTCHA is not initialized");
    }
  };

  return {
    isSubmitting,
    showToast,
    form,
    sendEmail,
    captchaKey,
    email,
    setEmail,
    name,
    setName,
    option,
    setSelectOption,
    refCaptcha,
  };
};

export default Form;
