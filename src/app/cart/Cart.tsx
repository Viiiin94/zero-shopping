import styles from "./Cart.module.scss";

const Cart = () => {
  return (
    <article className={styles.container}>
      <div className={styles.wrapper}>
        <h1>장바구니</h1>
        <section className={styles.box}></section>
      </div>
    </article>
  );
};

export default Cart;
