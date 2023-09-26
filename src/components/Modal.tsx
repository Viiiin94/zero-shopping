import React from "react";
import { MdClose } from "react-icons/md";

import styles from "./Modal.module.scss";

interface ModalProps {
  ontoggleModal: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ ontoggleModal, children }) => {
  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.close}>
          <MdClose size={45} onClick={ontoggleModal} />
        </div>
        <div className={styles.link}>{children}</div>
      </div>
    </nav>
  );
};

export default Modal;
