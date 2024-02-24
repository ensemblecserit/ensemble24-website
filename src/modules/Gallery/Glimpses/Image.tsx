"use client";

import { useGallery } from "../GalleryContext";
import styles from "../gallery.module.css";

type Props = {
  folder: string;
  name: string;
  caption: string;
};

const Image = (props: Props) => {
  const { changeState } = useGallery();
  const handleStart = () =>
    changeState(`/glimpses/${props.folder}/${props.name}`);
  return (
    <div className={styles.item} onClick={handleStart}>
      <div className={styles.item_img}>
        <img src={`/glimpses/${props.folder}/${props.name}`} />
        <p className={styles.item_name} data-img>
          {props.caption}.JPG
        </p>
      </div>
    </div>
  );
};

export default Image;
