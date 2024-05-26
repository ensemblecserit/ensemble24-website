"use client";

import Image from "next/image";
import { useGallery } from "../GalleryContext";
import styles from "../gallery.module.css";
import { Photo } from "@/data/galleryTypes";

type Props = {
  folder: string;
} & Photo;

const ImageElement = (props: Props) => {
  const { changeState } = useGallery();
  const link = `/glimpses/${props.folder}/${props.name}`;
  const handleStart = () => {
    changeState(link);
  };
  return (
    <div className={styles.item} onClick={handleStart}>
      <div className={styles.item_img}>
        {props.isLandscape ? (
          <Image
            alt={props.caption}
            src={link}
            height={472}
            width={800}
            draggable={false}
          />
        ) : (
          <Image
            alt={props.caption}
            src={link}
            height={500}
            width={375}
            draggable={false}
          />
        )}
      </div>
    </div>
  );
};

export default ImageElement;
