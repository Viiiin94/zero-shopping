import { useLocation } from "react-router-dom";

import Star from "./Star";
import styles from "./Product.module.scss";

interface ProductsType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: "men's clothing" | "women's clothing" | "jewelery" | "electronics";
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Product = () => {
  const products: ProductsType = useLocation().state;

  const { id, title, price, description, category, image, rating } = products;

  return (
    <article className={styles.container}>
      <section className={styles.section}>
        <div className={styles.card}>
          <h1>
            {id}. {title}
          </h1>
          <div className={styles.wrapper}>
            <img className={styles.img} src={image} alt="이미지" />
            <div className={styles.description_wrapper}>
              <div className={styles.category}>{category}</div>
              <div className={styles.description}>{description}</div>
              <div className={styles.price}>$ {price}</div>
              <div className={styles.rate_wrap}>
                <Star rate={rating.rate} />
                {rating.count}명 / {rating.rate}점
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Product;
