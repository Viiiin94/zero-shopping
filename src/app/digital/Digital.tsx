import { useAppSelector } from "../../hooks/useRedux";

import styles from "./Digital.module.scss";

const Digital = () => {
  const product = useAppSelector((state) => state.product.products);

  const digital = product.filter((item) => item.category === "electronics");

  return <div className={styles.container}>Digital</div>;
};

export default Digital;
