import Link from "next/link";
import styles from "./navbar.module.css";
import { HStack } from "@chakra-ui/react";
function NavBar() {
  return (
    <div>
      <HStack>
        <ul className={styles.nav}>
          <Link className="btn rounded-[120px] hover w-[120px]" href={"/"}>
            Project
          </Link>
          <Link
            className="btn rounded-[120px] hover w-[120px]"
            href={"/skills"}
          >
            Skills
          </Link>
          <Link className="btn rounded-[120px] hover w-[120px]" href={"/"}>
            Contact
          </Link>
        </ul>
      </HStack>
    </div>
  );
}

export default NavBar;
