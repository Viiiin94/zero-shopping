import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

import Modal from "../components/Modal";
import DarkMode from "../components/DarkMode";

import styles from "./Header.module.scss";
import Search from "../components/Search";
import ShoppingCart from "../components/ShoppingCart";

const Header = () => {
  const [isModal, setIsModal] = useState(false);

  const ontoggleModal = () => {
    setIsModal((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.left_side}>
          <div className={styles.hamburger}>
            <GiHamburgerMenu onClick={ontoggleModal} size={30} />
          </div>
          <div className={styles.home_button}>
            <a href="/">My Shop</a>
          </div>
          <div className={styles.link}>
            <Link to="/fashion">패션</Link>
            <Link to="/accessory">액세서리</Link>
            <Link to="/digital">디지털</Link>
          </div>
        </div>
        <div className={styles.right_side}>
          <DarkMode />
          <Search />
          <ShoppingCart />
        </div>
      </nav>
      {isModal && (
        <Modal ontoggleModal={ontoggleModal}>
          <Link to="/fashion">패션</Link>
          <Link to="/accessory">액세서리</Link>
          <Link to="/digital">디지털</Link>
        </Modal>
      )}
    </header>
  );
};

export default Header;
