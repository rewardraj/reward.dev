import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { recaptchaKey } from "./components/utils/credentials.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey}>
      <App />
    </GoogleReCaptchaProvider>
  </StrictMode>
);
