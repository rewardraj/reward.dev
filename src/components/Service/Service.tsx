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
  <section className={styles.gridInner} aria-label={`Service: ${title}`}>
    <div className={styles.ServiceIcon}>
      <IconComponent className={styles.icon} aria-hidden="true" />
    </div>
    <div className={styles.Service}>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </section>
);
