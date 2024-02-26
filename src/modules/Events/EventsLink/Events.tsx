import Section from "@/components/Section";
import SavedEvents from "./SavedEvents";
import styles from "../events.module.css";

const Events = () => {
  return (
    <Section id="events" tag="Events">
      <div className={styles.events_section}>
        <div>Events listing</div>
        <div>
          <SavedEvents />
        </div>
      </div>
    </Section>
  );
};

export default Events;
