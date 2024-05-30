import React from "react";
import styles from "./Buttons.module.css";
export const Buttons = ({ onButtonClick }) => {
  const buttonNames = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((val) => (
        <button className={styles.button} onClick={() => onButtonClick(val)}>
          {val}
        </button>
      ))}
    </div>
  );
};
