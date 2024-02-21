import Link from "next/link";
import styles from "./navbar.module.css";
import { HomeIcon, Mail, TicketPlus, Users } from "lucide-react";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <HomeIcon />
      </Link>
      <Link href="#about">
        <Users />
      </Link>
      <Link href="#events">
        <TicketPlus />
      </Link>
      <Link href="#contact">
        <Mail />
      </Link>
    </nav>
  );
};

export default Navbar;
