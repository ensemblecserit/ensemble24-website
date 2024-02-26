import { EventsGroupType } from "@/data/eventTypes";
import Finished from "./EventsPage/Finished";
import Post from "./EventsPage/Post";
import styles from "./events.module.css";
import { useEffect, useState } from "react";

type Props = {
  end?: boolean;
} & EventsGroupType;

const EventsGroup = (props: Props) => {
  return (
    <>
      <div className={styles.tag}>#{props.section}</div>
      <div className={styles.group}>
        {props.events.length > 0 &&
          props.events.map((e) => {
            return <Post key={e.id} {...e} />;
          })}
      </div>
      {!props.end && <Finished section={props.section} />}
    </>
  );
};

export default EventsGroup;
