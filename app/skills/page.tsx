import React from "react";
import styles from "./skill.module.css";
import skills from "../assets/skills";
import descriptions from "../assets/descriptions";
import SkillCard from "../components/skillCard/SkillCard";
import MovingBall from "../components/Animation";

import codePic from "../assets/pictures/web-programming.png";

function SkillPage() {
  return (
    <main className={styles.main}>
      <div className={styles.skillCardDev}>
        {descriptions.map((item) => (
          <SkillCard key={item.id} descriptions={item}>
            {item.id === 1 ? <MovingBall /> : <></>}
          </SkillCard>
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
