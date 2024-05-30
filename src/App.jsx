import React, { useState } from "react";
import styles from "./App.module.css";
import Disp from "./components/Disp";
import { Buttons } from "./components/Buttons";

function App() {
  const [val, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "c") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(val);
      setCalVal(result);
    } else {
      const newDisplayValue = val + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Disp text={val} />
      <Buttons onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
