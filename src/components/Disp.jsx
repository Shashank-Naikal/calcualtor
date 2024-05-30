import styles from "./Disp.module.css";
const Disp = (props) => {
  return (
    <input className={styles.display} type="text" value={props.text} readOnly />
  );
};

export default Disp;
