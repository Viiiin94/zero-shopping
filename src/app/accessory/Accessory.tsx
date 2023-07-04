import { useAppSelector } from "../../hooks/useRedux";

import styles from "./Accessory.module.scss";

const Accessory = () => {
  const product = useAppSelector((state) => state.product.products);

  const accessory = product.filter((item) => item.category === "jewelery");

  return <div className={styles.container}>Accessory</div>;
};

export default Accessory;
