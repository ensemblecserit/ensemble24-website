"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./navbar.module.css";
import { HomeIcon, Mail, TicketPlus, Users } from "lucide-react";
import Image from "next/image";
import cn from "@/lib/cn";

const Navbar = () => {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.fromTo(
        ".nav_animate",
        { width: 30, opacity: 0 },
        {
          width: 350,
          opacity: 1,
          ease: "elastic.out(0.5,0.4)",
          duration: 1,
        },
      );
    },
    { scope: container },
  );
  return (
    <div ref={container}>
      <nav className={cn(styles.nav, "nav_animate")} draggable={false}>
        <Link href="/">
          <HomeIcon />
        </Link>
        <Link href="#about">
          <Users />
        </Link>
        <Link href="/glimpses">
          <Image
            className={styles.logo}
            height={27}
            width={24}
            src="/ensemble-white.webp"
            alt="Ensemble '24 logo"
            draggable={false}
          />
        </Link>
        <Link href="#events">
          <TicketPlus />
        </Link>
        <Link href="#contact">
          <Mail />
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
