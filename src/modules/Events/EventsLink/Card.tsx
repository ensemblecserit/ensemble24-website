"use client";

import cn from "@/lib/cn";
import styles from "../events.module.css";
import { ArrowUpRightFromCircle } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {
  text: string;
  className?: string;
  link: string;
};

const Card = (props: Props) => {
  const router = useRouter();
  const handleClick = () => router.push(`/events#${props.link}`);
  return (
    <div
      className={cn(styles.card, props.className || "")}
      onClick={handleClick}
    >
      <div className={styles.filler}></div>
      <div className={styles.arrow}>
        <ArrowUpRightFromCircle strokeWidth={1} size={40} />
      </div>
      <p>{props.text}</p>
    </div>
  );
};

export default Card;
