import Heading from "@/components/Heading";
import ProvidePadding from "@/components/ProvidePadding";
import { AllEvents } from "@/data/eventData";
import EventsGroup from "@/modules/Events/EventsGroup";

const Page = () => {
  const a = AllEvents.length - 1;
  return (
    <ProvidePadding>
      <Heading headingLine1="Events in" headingLine2="ENSEMBLE" />
      {AllEvents.map((Each, index) => {
        return <EventsGroup {...Each} end={index === a} />;
      })}
    </ProvidePadding>
  );
};

export default Page;
