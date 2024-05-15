/* eslint-disable react/prop-types */
import styles from "./Loader.module.css";

function Loader({ width = "48px", height = "48px" }) {
  return (
    <div className={styles.loaderWrapper}>
      <div className={`${styles.loader} w-${width} h-${height}`}></div>
    </div>
  );
}

export default Loader;
