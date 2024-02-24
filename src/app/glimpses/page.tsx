import Link from "next/link";
import { Home } from "lucide-react";
import styles from "@/modules/Gallery/gallery.module.css";
import ProvidePadding from "@/components/ProvidePadding";
import GlimpsesPage from "@/modules/Gallery/GlimpsesPage";
import { GalleryProvider } from "@/modules/Gallery/GalleryContext";
import ImageModal from "@/modules/Gallery/Glimpses/ImageModal";

const page = () => {
  return (
    <ProvidePadding>
      <section className={styles.g_header}>
        <div className={styles.g_heading}>
          <div className={styles.g_caption}>Glimpses of</div>
          <div className={styles.g_ensemble}>ENSEMBLE</div>
        </div>
        <Link className={styles.home} href="/" aria-label="Go Back">
          <Home />
        </Link>
      </section>
      <GalleryProvider>
        <ImageModal />
        <GlimpsesPage />
      </GalleryProvider>
    </ProvidePadding>
  );
};

export default page;
