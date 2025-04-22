import { createContext, useContext, useState, ReactNode } from "react";
import styles from "./Toast.module.scss";

interface ToastMessage {
  type: "success" | "error";
  message: string;
}

interface ToastContextProps {
  showToastNotification: (message: string, type: "success" | "error") => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<ToastMessage | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const showToastNotification = (
    message: string,
    type: "success" | "error"
  ) => {
    setToast({ message, type });
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => setToast(null), 300);
    }, 5000);
  };

  return (
    <ToastContext.Provider value={{ showToastNotification }}>
      {toast && (
        <div
          className={`${styles.toastContainer} ${
            isVisible ? styles.visible : ""
          }`}
        >
          <div className={`${styles.toast} ${styles[toast.type]}`}>
            <p>{toast.message}</p>
          </div>
        </div>
      )}
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
