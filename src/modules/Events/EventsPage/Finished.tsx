import styles from "../events.module.css";
import Tick from "./Tick";

type Props = {
  section: string;
};

const Finished = (props: Props) => {
  return (
    <div className={styles.finished}>
      <Tick />
      <h2>You're all caught up</h2>
      <p>
        You have seen all posts in{" "}
        <span className={styles.bold}>{props.section}</span> section. Scroll
        down for more.
      </p>
    </div>
  );
};

export default Finished;
