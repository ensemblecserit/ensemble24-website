import { Home } from "lucide-react";
import Link from "next/link";
import styles from "../modules/Gallery/gallery.module.css";

type Props = {
  headingLine1: string;
  headingLine2: string;
};

const Heading = (props: Props) => {
  return (
    <section className={styles.g_header}>
      <div className={styles.g_heading}>
        <div className={styles.g_caption}>{props.headingLine1}</div>
        <div className={styles.g_ensemble}>{props.headingLine2}</div>
      </div>
      <Link className={styles.home} href="/" aria-label="Go Back">
        <Home />
      </Link>
    </section>
  );
};

export default Heading;
