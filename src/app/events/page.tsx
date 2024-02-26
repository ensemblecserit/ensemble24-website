import Heading from "@/components/Heading";
import ProvidePadding from "@/components/ProvidePadding";
import EventsPage from "@/modules/Events/EventsPage";

const Page = () => {
  return (
    <ProvidePadding>
      <Heading headingLine1="Events in" headingLine2="ENSEMBLE" />
      <EventsPage />
    </ProvidePadding>
  );
};

export default Page;
