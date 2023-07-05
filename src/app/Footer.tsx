import { BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { SiTistory, SiNotion } from "react-icons/si";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.text_container}>
        <p>BTSBRINGMEHERE-My Shop</p>
      </div>
      <div className={styles.logo_container}>
        <a href="https://github.com/BTSBRINGMEHERE" target="_blank">
          <BsGithub size={50} className={styles.logo} />
        </a>
        <a
          href="https://mynameisyyb.tistory.com/"
          target="_blank"
          className={styles.tistory}
        >
          <SiTistory size={32} />
        </a>
        <a
          href="https://square-oxygen-519.notion.site/1a2c928d858c4087a7baa45c94d72643?pvs=4"
          target="_blank"
        >
          <SiNotion size={50} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
