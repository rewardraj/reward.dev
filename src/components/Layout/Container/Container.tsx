import React from "react";
import styles from "./Container.module.scss";

interface Props {
  children: React.ReactNode;
}

export const Container: React.FC<Props> = ({ children }) => {
  return <div className={styles.Container}>{children}</div>;
};
