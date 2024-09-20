import Link from "next/link";
import styles from "./navbar.module.css";
function NavBar() {
  return (
    <div>
      <ul className={styles.nav}>
        <Link className="btn rounded-[120px] hover w-[120px]" href={"/"}>
          Project
        </Link>
        <Link className="btn rounded-[120px] hover w-[120px]" href={"/skills"}>
          Skills
        </Link>
        <Link className="btn rounded-[120px] hover w-[120px]" href={"/contact"}>
          Contact
        </Link>
      </ul>
    </div>
  );
}

export default NavBar;
