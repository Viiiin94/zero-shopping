import React from "react";

import styles from "./Card.module.scss";

interface CardProps {
  title?: string;
  image?: string;
  price?: number;
}

const Card: React.FC<CardProps> = ({ title, image, price }) => {
  return (
    <li className={styles.list}>
      <div className={styles.image_container}>
        <img className={styles.image} src={image} alt="이미지" />
      </div>

      <div className={styles.text_area}>
        <p>{title}</p>
        <p>$ {price}</p>
      </div>
    </li>
  );
};

export default Card;
