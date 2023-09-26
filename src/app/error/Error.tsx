import styles from "./Error.module.scss";

const Error = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.notfound}>
          <h1>Oops!</h1>
          <h2>404 - this page can't be found</h2>
        </div>
        <a href="/">Go to homepage</a>
      </div>
    </div>
  );
};

export default Error;
