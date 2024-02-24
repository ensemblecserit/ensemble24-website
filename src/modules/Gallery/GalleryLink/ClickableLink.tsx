import Link from "next/link";
import styles from "../gallery.module.css";

type Props = {
  className?: string;
  href: string;
  text?: string;
  children?: React.ReactNode;
  caption?: string;
};

const ClickableLink = (props: Props) => {
  return (
    <Link draggable={false} href={props.href} className={props.className || ""}>
      {props.text || ""}
      {props.children || ""}
      {props.caption && (
        <div className={styles.small_text}>{props.caption}</div>
      )}
    </Link>
  );
};

export default ClickableLink;
