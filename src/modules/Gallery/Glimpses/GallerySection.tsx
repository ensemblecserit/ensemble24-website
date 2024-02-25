import { Photo } from "@/data/galleryTypes";
import styles from "../gallery.module.css";
import ImageElement from "./ImageElement";

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
              <ImageElement key={photo.name} folder={props.folder} {...photo} />
            );
          })}
      </div>
    </div>
  );
};

export default GallerySection;
