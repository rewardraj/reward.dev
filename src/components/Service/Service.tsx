import React from "react";
import styles from "./Service.module.scss";

interface ServiceItemProps {
  IconComponent: React.ElementType;
  title: string;
  description: string;
}

export const Service: React.FC<ServiceItemProps> = ({
  IconComponent,
  title,
  description,
}) => (
  <div className={styles.gridInner}>
    <div className={styles.ServiceIcon}>
      <IconComponent className={styles.icon} />
    </div>
    <div className={styles.Service}>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </div>
);
