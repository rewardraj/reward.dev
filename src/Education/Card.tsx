import React from "react";
import styles from "./Card.module.scss";

interface CardItems {
  period: string;
  course: string;
  school: string;
  description: string;
}

interface CardProps {
  item: CardItems;
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className={styles.Card}>
      <div className={styles.Card__header}>
        <p>
          <strong className={styles.badge}>{item.period}</strong>
        </p>
      </div>
      <div className={styles.Card__body}>
        <p className={styles.course}>{item.course}</p>
        <p className={styles.school}>{item.school}</p>
        <p className={styles.description}>{item.description}</p>
      </div>
    </div>
  );
};

export default Card;
