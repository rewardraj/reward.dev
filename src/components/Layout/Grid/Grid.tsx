import React from "react";
import styles from "./Grid.module.scss";

interface GridProps {
  children: React.ReactNode;
  desktopColumns: number;
  tabletColumns?: number;
  mobileColumns?: number;
  gridGap?: string;
  labelledBy?: string;
}

const Grid: React.FC<GridProps> = ({
  children,
  desktopColumns,
  tabletColumns = 1,
  mobileColumns = 1,
  gridGap,
  labelledBy,
}) => {
  const gridClass = `${styles.grid} ${styles["desktop-" + desktopColumns]} ${
    styles["tablet-" + tabletColumns]
  } ${styles["mobile-" + mobileColumns]}`;

  return (
    <section
      className={gridClass}
      style={{ gap: gridGap }}
      aria-labelledby={labelledBy}
    >
      {children}
    </section>
  );
};

export default Grid;
