import Image from "next/image";
import styles from "../events.module.css";
import { Bookmark, ClipboardCheck } from "lucide-react";

type Props = {
  url: string;
  hideRegister?: boolean;
};
const Post = (props: Props) => {
  return (
    <div className={styles.post}>
      <Image
        src={props.url}
        height={350}
        width={350}
        alt="Event"
        draggable={false}
      />
      {!props.hideRegister && (
        <div className={styles.options}>
          <div className={styles.save}>
            <Bookmark />
            <span className={styles.text}>SAVE</span>
          </div>
          <div className={styles.register}>
            <ClipboardCheck />
            <span className={styles.text}>REGISTER</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
