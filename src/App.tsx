import React from "react";
import styles from "./global.module.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import ScrollTop from "./components/utils/ScrollTop/scrollTop";

const App: React.FC = () => {
  return (
    <Router>
      <ScrollTop />
      <main id="MainWrapper" className={styles.MainLayout} role="main">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
