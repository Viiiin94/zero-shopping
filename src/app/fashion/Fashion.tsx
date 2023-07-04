import { useAppSelector } from "../../hooks/useRedux";

import styles from "./Fashion.module.scss";

const Fashion = () => {
  const product = useAppSelector((state) => state.product.products);

  const fashion = product.filter(
    (item) =>
      item.category === "men's clothing" || item.category === "women's clothing"
  );

  return <div className={styles.container}>Fashion</div>;
};

export default Fashion;
