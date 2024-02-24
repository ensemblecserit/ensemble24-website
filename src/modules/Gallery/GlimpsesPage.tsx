import { Galleries } from "@/data/galleryData";
import GallerySection from "./Glimpses/GallerySection";
import styles from "./gallery.module.css";
import { Gallery } from "@/data/galleryTypes";

const GlimpsesPage = () => {
  const array = ["1.JPG", "2.JPG", "3.JPG", "4.JPG"];
  return (
    <div className={styles.page}>
      {Galleries.map((item: Gallery) => {
        return (
          <GallerySection
            key={item.folder}
            folder={item.folder}
            section={item.section}
            photos={item.photos}
          />
        );
      })}
    </div>
  );
};

export default GlimpsesPage;
