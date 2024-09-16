import { ReactNode } from "react";
import styles from "./skillCard.module.css";

interface Props {
  descriptions: { id: number; title: string; description: string };
  children?: ReactNode;
}

function SkillCard({ descriptions, children }: Props) {
  return (
    <div className={styles.divGrid}>
      <div className={styles.card}>
        {children}
        <div className={styles.body}></div>
        <hr />
        <br />
        <h1>{descriptions.title}</h1>
        <br />

        <p>{descriptions.description}</p>
      </div>
    </div>
  );
}

export default SkillCard;
