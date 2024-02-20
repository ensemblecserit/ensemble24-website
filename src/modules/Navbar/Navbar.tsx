import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">H</Link>
      <Link href="#about">A</Link>
      <Link href="#events">E</Link>
      <Link href="#contact">C</Link>
    </nav>
  );
};

export default Navbar;
