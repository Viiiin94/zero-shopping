import { useLocation } from "react-router-dom";

import styles from "./Product.module.scss";

const Product = () => {
  const stat = useLocation().state;

  const { id, title } = stat;

  return <div className={styles.container}>{title}</div>;
};

export default Product;
