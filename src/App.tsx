import React from "react";
import styles from "./global.module.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import ScrollTop from "./components/utils/ScrollTop/scrollTop";

const App: React.FC = () => {
  return (
    <Router>
      <ScrollTop />
      <div id="MainWrapper" className={styles.MainLayout}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
