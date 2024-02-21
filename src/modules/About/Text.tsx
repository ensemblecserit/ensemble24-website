import { ChildrenProps } from "@/types/common.types";
import styles from "./about.module.css";
import cn from "@/lib/cn";

interface Props extends ChildrenProps {
  heading: string;
  className?: string;
}

const Text = (props: Props) => {
  return (
    <div className={cn(styles.text_container, props.className || "")}>
      <h2 className={styles.h2}>{props.heading}</h2>
      <p className={styles.p}>{props.children}</p>
    </div>
  );
};

export default Text;
