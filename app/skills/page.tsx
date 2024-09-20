import React from "react";
import styles from "./skill.module.css";
import skills from "../assets/skills";
import descriptions from "../assets/descriptions";
import SkillCard from "../components/skillCard/SkillCard";
import MovingBall from "../components/VerticalBalls/Animation";
import BounceBall from "../components/bounce ball/BounceBall";

function SkillPage() {
  return (
    <main className={styles.main}>
      <div className={styles.skillCardDev}>
        {descriptions.map((item) => (
          <SkillCard key={item.id} descriptions={item} />
        ))}
      </div>
      <div className={styles.skillDev}>
        {skills.map((item) => (
          <p className={styles.item} key={item.id}>
            {item.skill}
          </p>
        ))}
      </div>
    </main>
  );
}

export default SkillPage;
