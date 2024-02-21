import { ChildrenProps } from "@/types/common.types";
import styles from "./about.module.css";

interface Props extends ChildrenProps {
  heading: string;
}

const Text = (props: Props) => {
  return (
    <div className={styles.text_container}>
      <h2 className={styles.h2}>{props.heading}</h2>
      <p className={styles.p}>{props.children}</p>
    </div>
  );
};

export default Text;
