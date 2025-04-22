import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { recaptchaKey } from "./components/utils/credentials.ts";
import { ToastProvider } from "./context/ToastContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastProvider>
      <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey}>
        <App />
      </GoogleReCaptchaProvider>
    </ToastProvider>
  </StrictMode>
);
