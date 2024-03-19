import Section from "@/components/Section";
import SavedEvents from "./EventGroups/SavedEvents";
import styles from "../events.module.css";
import Card from "./Card";
import ShowCases from "./EventGroups/ShowCases";

const Events = () => {
  return (
    <Section id="events" tag="Events">
      <div className={styles.events_section}>
        <div className={styles.categories}>
          <div className="row">
            <Card link="workshops" text="Workshops" className={styles.c1} />
            <Card
              link="competitions"
              text="Competitions"
              className={styles.c2}
            />
          </div>
          <div className="row">
            <Card link="exhibitions" text="Exhibitions" className={styles.c3} />
            <Card link="gaming" text="Gaming" className={styles.c4} />
          </div>
        </div>
        <div>
          <ShowCases />
          <SavedEvents />
        </div>
      </div>
    </Section>
  );
};

export default Events;
