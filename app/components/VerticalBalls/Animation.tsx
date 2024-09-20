import styles from "./animation.module.css";

import React from "react";

function MovingBall() {
  return (
    <div className={styles.icon}>
      <div className={styles.iconBall}></div>
      <div className={styles.iconBall}></div>
      <div className={styles.iconBall}></div>
      <div className={styles.iconBall}></div>
      <div className={styles.iconBall}></div>
    </div>
  );
}

export default MovingBall;
