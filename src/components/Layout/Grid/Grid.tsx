import React from "react";
import styles from "./Grid.module.scss";

interface GridProps {
  children: React.ReactNode;
  desktopColumns: number;
  tabletColumns?: number;
  mobileColumns?: number;
  gridGap?: string;
}

const Grid: React.FC<GridProps> = ({
  children,
  desktopColumns,
  tabletColumns = 1,
  mobileColumns = 1,
  gridGap,
}) => {
  const gridClass = `${styles.grid} ${styles["desktop-" + desktopColumns]} ${
    styles["tablet-" + tabletColumns]
  } ${styles["mobile-" + mobileColumns]}`;

  return (
    <div className={gridClass} style={{ gap: gridGap }}>
      {children}
    </div>
  );
};

export default Grid;
