import links from "./assets/links";
import MainPageText from "./components/main/MainPageText";
import ProjectCard from "./components/projectCard/ProjectCard";
import styles from "./page.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <MainPageText />

      <div className={styles.box}>
        <main className={styles.cardContainer}>
          {links.map((link) => (
            <ProjectCard webLink={link} key={link.id} />
          ))}
        </main>
      </div>
    </div>
  );
}
