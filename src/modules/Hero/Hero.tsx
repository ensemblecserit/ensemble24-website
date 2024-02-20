import Image from "next/image";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.hero_text} draggable={false}>
        <h1 className={styles.ense}>ENSE</h1>
        <h1 className={styles.mble}>MBLE</h1>
        <span className={styles.year}>'24</span>
      </div>
      <Image
        className={styles.dept}
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
