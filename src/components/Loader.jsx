import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className={`${styles.loader} h-8 w-8`}></div>
    </div>
  );
}

export default Loader;
