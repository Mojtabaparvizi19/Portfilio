import Link from "next/link";
import styles from "./contact.module.css";

function page() {
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>Are you ready to work together?</h1>
      <div className={styles.infoContainer}>
        <Link className="btn rounded-xl w-[120px] mt-5" href={"tel:6473030167"}>
          Call Me
        </Link>
        <Link
          className="btn rounded-xl w-[120px] mt-5"
          href={"mailto:kyle.parvizi@outlook.com"}
        >
          Email Me
        </Link>
      </div>
    </div>
  );
}

export default page;
