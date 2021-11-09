import React from "react";
import styles from "./AdditionalBtn.module.css";

const AdditionalBtn = ({ text, btnAction }) => {
  const onClickAction = (e) => {
    e.preventDefault();
    btnAction();
  };
  return (
    <>
      <button type="button" className={styles.addBtn} onClick={onClickAction}>
        {text}
      </button>
    </>
  );
};

export default AdditionalBtn;
