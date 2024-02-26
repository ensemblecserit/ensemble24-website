"use client";

import { AllEvents } from "@/data/eventData";
import EventsGroup from "./EventsGroup";
import { useState } from "react";

const EventsPage = () => {
  const a = AllEvents.length - 1;
  const [ids, setIds] = useState<number[]>([]);

  return (
    <>
      {AllEvents.map((Each, index) => {
        return <EventsGroup {...Each} end={index === a} key={index} />;
      })}
    </>
  );
};

export default EventsPage;
