import Heading from "@/components/Heading";
import ProvidePadding from "@/components/ProvidePadding";
import EventsPage from "@/modules/Events/EventsPage";
import Footer from "@/modules/Footer/Footer";

const Page = () => {
  return (
    <>
      <ProvidePadding>
        <Heading headingLine1="Events in" headingLine2="ENSEMBLE" />
        <EventsPage />
      </ProvidePadding>
      <Footer />
    </>
  );
};

export default Page;
