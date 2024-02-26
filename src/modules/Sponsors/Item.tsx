import Image from "next/image";
import styles from "./sponsors.module.css";
import { Sponsor } from "@/data/sponsors";

const Item = (props: Sponsor) => {
  return (
    <div key={props.link} className={styles.img_container}>
      <Image
        src={`/sponsors/${props.link}`}
        height={200}
        width={200}
        alt={props.link}
        draggable={false}
      />
      <p>{props.title}</p>
    </div>
  );
};

export default Item;
