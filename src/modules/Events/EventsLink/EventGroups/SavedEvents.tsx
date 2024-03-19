"use client";

import { getAllPostsFromLocalStorage } from "@/lib/postSave";
import { useEffect, useState } from "react";
import EventsGroup from "../../EventsGroup";

const SavedEvents = () => {
  const [posts, setPosts] = useState({});
  useEffect(() => {
    setPosts(getAllPostsFromLocalStorage());
  }, []);
  if (Object.keys(posts).length > 0)
    return (
      <EventsGroup
        events={Object.values(posts)}
        section="your-saved-events"
        end={true}
      />
    );
  else return <></>;
};

export default SavedEvents;
