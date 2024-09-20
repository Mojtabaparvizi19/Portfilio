import styles from "./skillCard.module.css";

interface Props {
  descriptions: { id: number; title: string; description: string };
}

function SkillCard({ descriptions }: Props) {
  return (
    <div className={styles.divGrid}>
      <div className={styles.card}>
        <div className={styles.body}></div>
        <h1 className={styles.title}>{descriptions.title}</h1>
        <p className={styles.description}>{descriptions.description}</p>
      </div>
    </div>
  );
}

export default SkillCard;
