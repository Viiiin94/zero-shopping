import Card from "../../components/card/Card";
import { useAppSelector } from "../../hooks/useRedux";

import styles from "./Accessory.module.scss";

const Accessory = () => {
  const product = useAppSelector((state) => state.product.products);

  const accessory = product.filter((item) => item.category === "jewelery");

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>디지털</h1>
      <div className={styles.section}>
        <ul className={styles.list_container}>
          {accessory.map((product) => (
            <Card
              image={product.image}
              title={product.title}
              price={product.price}
              product={product}
              key={product.id}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Accessory;
