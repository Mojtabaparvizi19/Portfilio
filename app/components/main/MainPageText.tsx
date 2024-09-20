"use client";

import { useRouter } from "next/navigation";
import styles from "./main.module.css";

function MainPageText() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Full-Stack Developer & Web Designer</h1>
      <h2 className={styles.parag}>Building beautiful interactive websites</h2>
      <h2 className={styles.parag}>
        Using React, TypeScript, Chakra, Bootstrap and TailwindCss
      </h2>
      <button
        onClick={() => router.push("/contact")}
        className={styles.hireButton}
      >
        {`< Hire Me > `}
      </button>
    </div>
  );
}

export default MainPageText;
