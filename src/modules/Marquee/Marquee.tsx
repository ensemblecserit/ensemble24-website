"use client";

import styles from "./marquee.module.css";
import TextGroup from "./TextGroup";

const Marquee = () => {
  return (
    <section className={styles.marquee} draggable={false}>
      <div className={styles.inner}>
        <TextGroup />
        <TextGroup />
      </div>
    </section>
  );
};

export default Marquee;
