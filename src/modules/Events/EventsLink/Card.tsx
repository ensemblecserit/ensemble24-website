import cn from "@/lib/cn";
import styles from "../events.module.css";
import { ArrowUpRightFromCircle } from "lucide-react";
import Link from "next/link";

type Props = {
  text: string;
  className?: string;
  link: string;
};

const Card = (props: Props) => {
  return (
    <Link
      href={`/events#${props.link}`}
      className={cn(styles.card, props.className || "")}
    >
      <div className={styles.filler}></div>
      <div className={styles.arrow}>
        <ArrowUpRightFromCircle strokeWidth={1} size={40} />
      </div>
      <p>{props.text}</p>
    </Link>
  );
};

export default Card;
