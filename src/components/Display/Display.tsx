import React from "react";
import styles from "./Display.module.scss";

interface DisplayProps {
  text?: string;
  children: React.ReactNode;
  handlePrevClick?: () => void;
  handleNextClick?: () => void;
  showPrevButton?: boolean;
  showNextButton?: boolean;
  backgroundColor?: string;
  textColor?: string;
}

const Display: React.FC<DisplayProps> = ({
  text,
  children,
  backgroundColor = "fff",
  textColor = "#fff",
}) => {
  return (
    <div style={{ backgroundColor: backgroundColor }}>
      <div className={styles.Display__main}>
        <div className={styles.Display__header}>
          <div className={styles.Display__headerText}>
            <h4 style={{ color: textColor }}>{text}</h4>
          </div>
        </div>

        <div className={styles.Display__wrapper}>{children}</div>
      </div>
    </div>
  );
};

export default Display;
