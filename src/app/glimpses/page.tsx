import ProvidePadding from "@/components/ProvidePadding";
import GlimpsesPage from "@/modules/Gallery/GlimpsesPage";
import { GalleryProvider } from "@/modules/Gallery/GalleryContext";
import ImageModal from "@/modules/Gallery/Glimpses/ImageModal";
import Heading from "@/components/Heading";

const page = () => {
  return (
    <ProvidePadding>
      <Heading headingLine1="Glimpses of" headingLine2="ENSEMBLE" />
      <GalleryProvider>
        <ImageModal />
        <GlimpsesPage />
      </GalleryProvider>
    </ProvidePadding>
  );
};

export default page;
