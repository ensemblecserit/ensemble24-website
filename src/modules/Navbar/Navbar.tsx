import Link from "next/link";
import styles from "./navbar.module.css";
import { HomeIcon, Mail, TicketPlus, Users } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={styles.nav} draggable={false}>
      <Link href="/">
        <HomeIcon />
      </Link>
      <Link href="#about">
        <Users />
      </Link>
      <Image
        className={styles.logo}
        height={31}
        width={27}
        src="/ensemble-white.webp"
        alt="Ensemble '24 logo"
        draggable={false}
      />
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
