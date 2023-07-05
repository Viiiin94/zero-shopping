import Card from "../../components/card/Card";
import { useAppSelector } from "../../hooks/useRedux";

import styles from "./Fashion.module.scss";

const Fashion = () => {
  const product = useAppSelector((state) => state.product.products);

  const fashion = product.filter(
    (item) =>
      item.category === "men's clothing" || item.category === "women's clothing"
  );

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>패션</h1>
      <div className={styles.section}>
        <ul className={styles.list_container}>
          {fashion.map((item) => (
            <Card
              image={item.image}
              title={item.title}
              price={item.price}
              key={item.id}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Fashion;
