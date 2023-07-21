import { useLocation } from "react-router-dom";

import styles from "./Product.module.scss";
import Star from "./Star";

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
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.card}>
          <h1>
            {id}. {title}
          </h1>
          <div className={styles.description}>
            <img className={styles.img} src={image} alt="이미지" />
            <div>
              <div>{category}</div>
              <div>{description}</div>
              <div>$ {price}</div>
              <div className={styles.rate_wrap}>
                {rating.count} {rating.rate}
                <Star rate={rating.rate} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
