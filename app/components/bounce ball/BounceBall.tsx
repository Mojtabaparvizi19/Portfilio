import styles from "./ball.module.css";

function BounceBall() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.ball} />
    </div>
  );
}

export default BounceBall;
