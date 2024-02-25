import Finished from "./EventsPage/Finished";
import Post from "./EventsPage/Post";
import styles from "./events.module.css";

type Props = {
  folder: string;
  section: string;
  end?: boolean;
};

const EventsGroup = (props: Props) => {
  return (
    <>
      <div className={styles.tag}>#{props.section}</div>
      <div className={styles.group}>
        <Post url={`/events/${props.folder}/2.jpeg`} />
        <Post url={`/events/${props.folder}/3.jpeg`} hideRegister />
        <Post url={`/events/${props.folder}/4.jpeg`} hideRegister />
        <Post url={`/events/${props.folder}/1.jpeg`} hideRegister />
        <Post url={`/events/${props.folder}/3.jpeg`} />
        <Post url={`/events/${props.folder}/1.jpeg`} />
      </div>
      {!props.end && <Finished section={props.section} />}
    </>
  );
};

export default EventsGroup;
