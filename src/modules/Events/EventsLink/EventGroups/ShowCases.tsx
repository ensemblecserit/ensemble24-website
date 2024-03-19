import { ShowCasesData } from "@/data/eventData";
import EventsGroup from "../../EventsGroup";

const ShowCases = () => {
  return (
    <>
      <EventsGroup events={ShowCasesData} section="showcase" end={true} />
    </>
  );
};

export default ShowCases;
