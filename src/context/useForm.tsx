import emailjs from "@emailjs/browser";
import {
  createContext,
  useState,
  useRef,
  FormEvent,
  useContext,
  ReactNode,
  RefObject,
} from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface ToastMessage {
  type: "success" | "error";
  message: string;
}

interface FormContextProps {
  isSubmitting: boolean;
  showToast: boolean;
  toastMessage: ToastMessage | null;
  form: RefObject<HTMLFormElement>;
  sendEmail: (e: FormEvent<HTMLFormElement>) => void;
  email: string | undefined;
  setEmail: (email: string) => void;
  name: string | undefined;
  setName: (name: string) => void;
  option: string | undefined;
  setSelectOption: (option: string) => void;
  refCaptcha: RefObject<ReCAPTCHA>;
  resetForm: () => void;
}

interface FormProviderProps {
  children: ReactNode;
  serviceId: string;
  templateId: string;
  publicKey: string;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

export default function FormProvider({
  children,
  serviceId,
  templateId,
  publicKey,
}: FormProviderProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState<ToastMessage | null>(null);
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [option, setSelectOption] = useState<string>();
  const captchaKey = useRef<number>(new Date().getTime());
  const refCaptcha = useRef<ReCAPTCHA>(null);
  const form = useRef<HTMLFormElement>(null);

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
    setName("");
    setEmail("");
    setSelectOption("");
    if (refCaptcha.current) {
      refCaptcha.current.reset();
      captchaKey.current = new Date().getTime();
    }
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!refCaptcha.current) {
      showToastMessage("Please complete the captcha challenge", "error");
      return;
    }

    setIsSubmitting(true);
    if (form.current) {
      const opts = {
        publicKey: publicKey,
        "g-recaptcha-response": refCaptcha.current.getValue(),
      };
      emailjs.init(publicKey);
      emailjs
        .sendForm(serviceId, templateId, form.current, opts)
        .then(() => {
          showToastMessage("Message sent successfully!", "success");
          resetForm();
        })
        .catch((error) => {
          console.error("FAILED...", error);
          showToastMessage(
            "Failed to send message. Please try again later.",
            "error"
          );
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  const value = {
    isSubmitting,
    showToast,
    toastMessage,
    form,
    sendEmail,
    email,
    setEmail,
    name,
    setName,
    option,
    setSelectOption,
    refCaptcha,
    resetForm,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

export function useForm() {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return context;
}
