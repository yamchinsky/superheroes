import React, { Component } from "react";
import { createPortal } from "react-dom";
import AdditionalBtn from "../buttons/AdditionalBtn";

import styles from "./ModalWindow.module.scss";

const modalRoot = document.querySelector("#modal-root");

class ModalWindow extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onCancel();
    }
  };

  handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onCancel();
    }
  };

  render() {
    const { text, onSubmit, onCancel } = this.props;
    return createPortal(
      <div className={styles.ModalOverlay} onClick={this.handleOverlayClick}>
        <div className={styles.ModalContent}>
          <div className={styles.CloseModalBtnWrapper}>
            <button
              type="button"
              onClick={onCancel}
              className={styles.CloseModalBtn}
            ></button>
          </div>
          <div className={styles.ModalContentWrapper}>
            <p className={styles.ModalText}>{text}</p>
          </div>
          <div className={styles.ModalContentWrapper}>
            <div className={styles.btnWrapper}>
              <AdditionalBtn text={"Да"} btnAction={onSubmit} />
            </div>
            <div className={styles.btnWrapper}>
              <AdditionalBtn text={"Нет"} key="2" btnAction={onCancel} />
            </div>
          </div>
        </div>
      </div>,
      modalRoot
    );
  }
}

export default ModalWindow;
