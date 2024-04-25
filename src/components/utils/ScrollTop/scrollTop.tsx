import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import styles from "./scrollTop.module.scss";

const ScrollTop = () => {
  const [isVisible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={styles.scrollToTop}
      style={{ display: isVisible ? "block" : "none" }}
      aria-live="polite"
    >
      <button
        type="button"
        className={styles.scrollButton}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FaChevronUp className={styles.arrowIcon} />
      </button>
    </div>
  );
};

export default ScrollTop;
