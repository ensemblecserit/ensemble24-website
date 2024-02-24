"use client";

import Image from "next/image";
import styles from "./hero.module.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import cn from "@/lib/cn";

const Hero = () => {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      let tl = gsap.timeline({ delay: 0.5 });
      tl.fromTo(
        ".text_animate",
        { opacity: 0, y: -60 },
        {
          opacity: 1,
          y: 0,
          ease: "elastic.out(0.5,0.4)",
          duration: 1.5,
          stagger: 0.2,
        },
        "<",
      );
      // tl.to(".dept_animate", { x: 0, opacity: 1, duration: 0.4, delay: -1.5 });
    },
    { scope: container },
  );
  return (
    <section className={styles.section} ref={container}>
      <div className={cn(styles.hero_text, "hero_animate")} draggable={false}>
        <h1 className={cn(styles.ense, "text_animate")}>ENSE</h1>
        <h1 className={cn(styles.mble, "text_animate")}>MBLE</h1>
        <span className={cn(styles.year, "text_animate")}>'24</span>
      </div>
      <Image
        className={cn(styles.dept, "dept_animate")}
        height={780}
        width={1100}
        alt="CSE Department RIT"
        src="/dept.png"
        draggable={false}
        priority
      />
    </section>
  );
};

export default Hero;
