import Card from "../../components/card/Card";
import { useAppSelector } from "../../hooks/useRedux";

import styles from "./Digital.module.scss";

const Digital = () => {
  const product = useAppSelector((state) => state.product.products);

  const digital = product.filter((item) => item.category === "electronics");

  return (
    <article className={styles.container}>
      <h1 className={styles.title}>디지털</h1>
      <section className={styles.section}>
        <ul className={styles.list_container}>
          {digital.map((product) => (
            <Card
              image={product.image}
              title={product.title}
              price={product.price}
              product={product}
              key={product.id}
            />
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Digital;
