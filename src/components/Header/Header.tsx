import React from "react";
import styles from "./Header.module.scss";

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <div className={styles.Header}>
      <h2 className={styles.maskedText}>{title}</h2>
      <p className={styles.subtitle}>
        {subtitle}
        <span className={styles.separator}></span>
      </p>
    </div>
  );
};

export default Header;
