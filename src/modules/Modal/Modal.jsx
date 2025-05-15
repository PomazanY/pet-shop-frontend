import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "../../shared/icons";
import styles from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ close, children }) => {
  const overlayRef = useRef();

  const closeModal = (event) => {
    const { target } = event;
    if (target === overlayRef.current) {
      close();
    }
  };

  useEffect(() => {
    const handleEscape = function ({ code }) {
      if (code === "Escape") {
        console.log("Escape");
        close();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, [close]);

  return createPortal(
    <div ref={overlayRef} onClick={closeModal} className={styles.overlay}>
      <div className={styles.content}>
        <span onClick={close} className={styles.close}><CloseIcon stroke="white"/></span>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;