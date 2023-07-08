import React from "react";

import { Product } from "../../types/index.ts";

import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  image: string;
  price: number;
  product: Product;
}

const Card: React.FC<CardProps> = ({ title, image, price, product }) => {
  return (
    <li className={styles.list}>
      <Link
        to="/products/:product"
        className={styles.image_container}
        state={product}
      >
        <img className={styles.image} src={image} alt="이미지" />
      </Link>

      <div className={styles.text_area}>
        <p>{title}</p>
        <p>$ {price}</p>
      </div>
    </li>
  );
};

export default Card;
