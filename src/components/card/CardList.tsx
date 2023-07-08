import React from "react";

import Card from "./Card";

import { Products } from "../../types";

import styles from "./CardList.module.scss";

interface CardListProps {
  products: Products;
  title: string;
}

const CardList: React.FC<CardListProps> = ({ products, title }) => {
  return (
    <section className={styles.section}>
      <div>
        <h1 className={styles.title}>{title}</h1>
        <ul className={styles.list_container}>
          {products
            .map((product) => (
              <Card
                image={product.image}
                title={product.title}
                price={product.price}
                product={product}
                key={product.id}
              />
            ))
            .slice(0, 4)}
        </ul>
      </div>
    </section>
  );
};

export default CardList;
