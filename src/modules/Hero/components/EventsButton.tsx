import cn from "@/lib/cn";
import Link from "next/link";
import { ChildrenProps } from "@/types/common.types";
import styles from "../hero.module.css";

const EventsButton = (props: ChildrenProps) => {
  return (
    <Link href="/events" className={cn(styles.events, "text_animate")}>
      {props.children}
    </Link>
  );
};

export default EventsButton;
