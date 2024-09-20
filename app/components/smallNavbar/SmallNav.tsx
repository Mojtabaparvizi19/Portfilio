"use client";

import Link from "next/link";
import styles from "./smallNav.module.css";
import { useState } from "react";

function SmallNav() {
  const [isExpanded, setExpanded] = useState(false);
  return (
    <div>
      <div className="flex">
        <button className={styles.btn} onClick={() => setExpanded(!isExpanded)}>
          {isExpanded ? "X" : "Menu"}
        </button>
        <h1 className={styles.font}>Kyle Parvizi</h1>
      </div>
      {isExpanded && (
        <div className={styles.smallNav}>
          <Link
            onClick={() => setExpanded(false)}
            className={styles.item}
            href={"/"}
          >
            Project
          </Link>
          <Link
            onClick={() => setExpanded(false)}
            className={styles.item}
            href={"/skills"}
          >
            Skills
          </Link>
          <Link
            onClick={() => setExpanded(false)}
            className={styles.item}
            href={"/contact"}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}

export default SmallNav;
