import { Photo } from "@/data/galleryTypes";
import styles from "../gallery.module.css";
import Image from "./Image";

type Props = {
  folder: string;
  section: string;
  photos: Photo[];
};
const GallerySection = (props: Props) => {
  return (
    <div className={styles.g_sec} id={props.folder}>
      <h2>#{props.section}</h2>
      <div className={styles.gallery}>
        {props.photos &&
          props.photos.length > 0 &&
          props.photos.map((photo: Photo) => {
            return (
              <Image
                key={photo.name}
                name={photo.name}
                folder={props.folder}
                caption={photo.caption}
              />
            );
          })}
      </div>
    </div>
  );
};

export default GallerySection;
