import React from "react";

import styles from "./Modal.module.scss";

interface ModalProps {
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  return <div className={styles.modal_container}>{children}</div>;
};

export default Modal;
