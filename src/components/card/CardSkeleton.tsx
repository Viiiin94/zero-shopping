import { CSSProperties } from "react";
import { ClipLoader } from "react-spinners";

import styles from "./CardSkeleton.module.scss";

const override: CSSProperties = {
  display: "flex",
  margin: "auto 0",
};

const CardSkeleton = () => {
  return (
    <li className={styles.list}>
      <div className={styles.spinner_container}>
        <ClipLoader
          color="#1f1f1f"
          loading={true}
          size={100}
          cssOverride={override}
        />
      </div>

      <div className={styles.text_area}></div>
    </li>
  );
};

export default CardSkeleton;
