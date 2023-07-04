import React from "react";

import Card from "./Card";

import { Product } from "../types";

import styles from "./CardList.module.scss";

interface CardListProps {
  props: Product;
  title: string;
}

const CardList: React.FC<CardListProps> = ({ props, title }) => {
  return (
    <section className={styles.section}>
      <div>
        <h1 className={styles.title}>{title}</h1>
        <ul className={styles.list_container}>
          {props
            .map((item) => (
              <Card
                image={item.image}
                title={item.title}
                price={item.price}
                key={item.id}
              />
            ))
            .slice(0, 4)}
        </ul>
      </div>
    </section>
  );
};

export default CardList;
