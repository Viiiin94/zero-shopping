import { useAppSelector } from "../../hooks/useRedux";
import CardList from "../../components/card/CardList";

import styles from "./Main.module.scss";

const Main = () => {
  const product = useAppSelector((state) => state.product.products);

  const fashion = product.filter(
    (item) =>
      item.category === "men's clothing" || item.category === "women's clothing"
  );

  const accessory = product.filter((item) => item.category === "jewelery");

  const digital = product.filter((item) => item.category === "electronics");

  return (
    <div className={styles.container}>
      <CardList props={fashion} title="패션" />
      <CardList props={accessory} title="액세서리" />
      <CardList props={digital} title="디지털" />
    </div>
  );
};

export default Main;
