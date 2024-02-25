import Heading from "@/components/Heading";
import ProvidePadding from "@/components/ProvidePadding";
import EventsGroup from "@/modules/Events/EventsGroup";

const Page = () => {
  return (
    <ProvidePadding>
      <Heading headingLine1="Events in" headingLine2="ENSEMBLE" />
      <EventsGroup folder="pre-events" section="Workshops" />
      <EventsGroup folder="pre-events" section="Competitions" />
      <EventsGroup folder="pre-events" section="Exhibitions" />
      <EventsGroup folder="pre-events" section="Stalls" end />
    </ProvidePadding>
  );
};

export default Page;
